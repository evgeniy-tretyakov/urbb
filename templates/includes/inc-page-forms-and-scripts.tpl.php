<!-- FORMS AND SCRIPTS -->

<?php if (!empty($page['hidden'])): ?>
  <div class="hidden-region <?php print $container_class; ?>">
    <?php print render($page['hidden']); ?>
  </div>
<?php endif; ?>