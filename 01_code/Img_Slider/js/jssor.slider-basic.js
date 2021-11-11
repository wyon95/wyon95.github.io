window.jssor_1_slider_init = function() {

  var jssor_1_SlideoTransitions = [
    [{b:20,d:980,x:11,e:{x:6}}],
    [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:200,d:760,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:200,d:760,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:20,d:980,x:190,e:{x:6}}],
    [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:40,d:960,x:40,e:{x:6}}],
    [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:20,d:980,x:148,e:{x:6}}],
    [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:20,d:980,x:22,e:{x:6}}],
    [{b:-1,d:1,x:100,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}],
    [{b:-1,d:1,x:200,p:{x:{d:1,dO:9}}},{b:200,d:800,x:0,e:{x:6},p:{x:{dl:0.1}}}]
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 980;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};