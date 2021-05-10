<!-- HEADER -->
<header class="header">
  <div class="header--blue_line">
    <div class="container">
      <div class="header--logo">
        <?php if ($is_admin): ?><!-- BLOCK::header logo (b1) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 1))));
          print drupal_render($block);
         ?>
      </div>
      <div class="header--phone">
        <?php if ($is_admin): ?><!-- BLOCK::header phone (b2) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 2))));
          print drupal_render($block);
         ?>
      </div>
      <div class="header--mail">
        <?php if ($is_admin): ?><!-- BLOCK::header mail (b3) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 3))));
          print drupal_render($block);
         ?>
      </div>
      <div class="header--ruen">
        <?php if ($is_admin): ?><!-- BLOCK::header ru / en (b4) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 4))));
          print drupal_render($block);
         ?>
      </div>
      <div class="header--callback_form">
        <?php if ($is_admin): ?><!-- BLOCK::header callback form (b5) --><?php endif ?>
        <?php 
          $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 5))));
          print drupal_render($block);
         ?>
      </div>
    </div>
  </div>

  <div class="header--menu_line">
    <div class="container">
      <div class="navbar-collapse" id="navbar-collapse">
        <nav role="navigation">
          <?php
             $block = _block_get_renderable_array(_block_render_blocks(array(block_load('system', 'main-menu'))));
             print drupal_render($block);
           ?>
        </nav>
        <div class="menu_line--blocks">
          <?php if ($is_admin): ?><!-- BLOCK::header phone (b2) --><?php endif ?>
          <?php 
            $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 2))));
            print drupal_render($block);
           ?>
           <?php if ($is_admin): ?><!-- BLOCK::header mail (b3) --><?php endif ?>
           <?php 
             $block = _block_get_renderable_array(_block_render_blocks(array(block_load('block', 3))));
             print drupal_render($block);
            ?>
        </div>
      </div>

      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
  </div>

</header>