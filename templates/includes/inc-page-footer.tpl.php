<!-- FOOTER -->

<footer class="footer">
  <div class="footer--content_line">  
    <div class="container">
      <div class="footer--col footer--copyright">
        <div class="row footer--logo">
          <?php if ($is_admin): ?><!-- BLOCK::header logo (b1) --><?php endif ?>
          <?php 
            $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 1))));
            print drupal_render($block);
           ?>
        </div>
        <div class="row footer--socials">
          <?php if ($is_admin): ?><!-- BLOCK::footer social (b6) --><?php endif ?>
          <?php 
            $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 6))));
            print drupal_render($block);
           ?>
        </div>
        <div class="row footer--promo_text">
          <?php if ($is_admin): ?><!-- BLOCK::footer responsibility (b7) --><?php endif ?>
          <?php 
            $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 7))));
            print drupal_render($block);
           ?>
        </div>
      </div>
      <div class="footer--col footer--main_menu">
        <h2 class="footer--header"><?php echo t('Menu') ?></h2>
        <div class="navbar" id="navbar-footer">
          <nav role="navigation">
            <?php
               $block = _block_get_renderable_array(_block_render_blocks(array(block_load('menu', 'menu-footer-menu'))));
               print drupal_render($block);
             ?>
          </nav>
        </div>

      </div>
      <div class="footer--col footer--cat_menu">
        <h2 class="footer--header"><?php echo t('Catalog') ?></h2>
        <div class="navbar" id="navbar-footer">
          <nav role="navigation">
            <?php
               $block = _block_get_renderable_array(_block_render_blocks(array(block_load('menu', 'menu-footer-two'))));
               print drupal_render($block);
             ?>
          </nav>
        </div>
      </div>
      <div class="row footer--contacts">
        <h2 class="footer--header"><?php echo t('Contacts') ?></h2>
        <?php if ($is_admin): ?><!-- BLOCK::footer contacts (b8) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 8))));
          print drupal_render($block);
         ?>
      </div>
    </div>
  </div>

  <div class="footer--static_line">
    <div class="footer--copyright"><em>&copy; <?php echo date('Y') ?> LLC “Chelyabinsk Tractor Plant”»</em></div>
    <div class="footer--rb_logo">
      ribbla
    </div>
  </div>
</footer>
