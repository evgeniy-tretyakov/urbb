(function ($) {
    $(document).ready(function() {

    function init() {
        var myMap = new ymaps.Map('indexMap', {
                center: [55.21402906948587,61.44104649999995],
                zoom: 15,
                controls: ['zoomControl']
            }),


            // Основная метка
            myGeoObject = new ymaps.GeoObject({

                });
            /*
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('multiTouch');
            */
            myMap.behaviors.disable('drag');


            myMap.geoObjects
                
                .add(new ymaps.Placemark([55.21402906948587,61.44104649999995], {
                    balloonContent: '<strong>УРББ</strong>'
                }, {
                    preset: 'islands#orangeDotIcon'
                }))
               
            
        // Коллекция меток
            myCollection = new ymaps.GeoObjectCollection(),
            myPoints = [

            ];
    
        // Заполняем коллекцию данными.
        for (var i = 0, l = myPoints.length; i < l; i++) {
            var point = myPoints[i];
            myCollection.add(new ymaps.Placemark(
                point.coords, {
                    balloonContentBody: point.text
                }
            ));
        }
    
        // Добавляем коллекцию меток на карту.
        myMap.geoObjects.add(myCollection);
    
        // Создаем экземпляр класса ymaps.control.SearchControl
        var mySearchControl = new ymaps.control.SearchControl({
            options: {
                // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
                provider: new CustomSearchProvider(myPoints),
                // Не будем показывать еще одну метку при выборе результата поиска,
                // т.к. метки коллекции myCollection уже добавлены на карту.
                noPlacemark: true,
                resultsPerPage: 5
            }});
    
        // Добавляем контрол в верхний правый угол,
        myMap.controls
            .add(mySearchControl, { float: 'right' });
    }
    
    
    // Провайдер данных для элемента управления ymaps.control.SearchControl.
    // Осуществляет поиск геообъектов в по массиву points.
    // Реализует интерфейс IGeocodeProvider.
    function CustomSearchProvider(points) {
        this.points = points;
    }
    
    // Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
    CustomSearchProvider.prototype.geocode = function (request, options) {
        var deferred = new ymaps.vow.defer(),
            geoObjects = new ymaps.GeoObjectCollection(),
        // Сколько результатов нужно пропустить.
            offset = options.skip || 0,
        // Количество возвращаемых результатов.
            limit = options.results || 20;
            
        var points = [];
        // Ищем в свойстве text каждого элемента массива.
        for (var i = 0, l = this.points.length; i < l; i++) {
            var point = this.points[i];
            if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
                points.push(point);
            }
        }
        // При формировании ответа можно учитывать offset и limit.
        points = points.splice(offset, limit);
        // Добавляем точки в результирующую коллекцию.
        for (var i = 0, l = points.length; i < l; i++) {
            var point = points[i],
                coords = point.coords,
                        text = point.text;
    
            geoObjects.add(new ymaps.Placemark(coords, {
                name: text + ' name',
                description: text + ' description',
                balloonContentBody: '<p>' + text + '</p>',
                boundedBy: [coords, coords]
            }));
        }
    
        deferred.resolve({
            // Геообъекты поисковой выдачи.
            geoObjects: geoObjects,
            // Метаинформация ответа.
            metaData: {
                geocoder: {
                    // Строка обработанного запроса.
                    request: request,
                    // Количество найденных результатов.
                    found: geoObjects.getLength(),
                    // Количество возвращенных результатов.
                    results: limit,
                    // Количество пропущенных результатов.
                    skip: offset
                }
            }
        });
    
        // Возвращаем объект-обещание.
        return deferred.promise();
    };

    
    ymaps.ready(init);
    
    
     
});

})(jQuery);