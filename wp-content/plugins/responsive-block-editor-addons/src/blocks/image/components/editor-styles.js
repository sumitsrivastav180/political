import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import {hexToRgba} from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

function EditorStyles(props) {
  const {
    imageAlignment,
    imageAlignmentTablet,
    imageAlignmentMobile,
    captionimageAlignment,
    captionimageAlignmentTablet,
    captionimageAlignmentMobile,
    captionFontFamily,
    captionFontSize,
    captionFontSizeMobile,
    captionFontSizeTablet,
    captionFontWeight,
    captionLineHeight,
    captionLetterSpacing,
    captionTextTransform,
    captionColor,
    captiontopmargin,
    captionbottommargin,
    captionleftmargin,
    captionrightmargin,
    captiontopmarginTablet,
    captionbottommarginTablet,
    captionleftmarginTablet,
    captionrightmarginTablet,
    captiontopmarginMobile,
    captionbottommarginMobile,
    captionleftmarginMobile,
    captionrightmarginMobile,
    block_id,
    imageBorderColor,
    imageBorderRadius,
    imageBorderStyle,
    imageBorderWidth,
    imageboxShadowHOffset,
    imageboxShadowVOffset,
    imageboxShadowBlur,
    imageboxShadowSpread,
    imageboxShadowColor,
    imageboxShadowPosition,
    imageboxShadowHoverColor,
    imageboxShadowHoverHOffset,
    imageboxShadowHoverVOffset,
    imageboxShadowHoverBlur,
    imageboxShadowHoverSpread,
    MaskShape,
    MaskSize,
    MaskPosition,
    MaskRepeat,
    imageObjectFit,
    imageWidth,
    imageHeight,
    imageWidthTablet,
    imageHeightTablet,
    imageWidthMobile,
    imageHeightMobile,
    imageOnHoverImage,
    LayoverContentPosition,
    layoverimageBorderColor,
    layoverimageBorderRadius,
    layoverimageBorderStyle,
    layoverimageBorderWidth,
    layoverInputDistance,
    layoverBackgroundcolor,
    layoverOpacity,
    layoverHoverOpacity,
    Layoverswitch,
    layoverHeadingFontFamily,
    layoverHeadingFontSize,
    layoverHeadingFontSizeMobile,
    layoverHeadingFontSizeTablet,
    layoverHeadingFontWeight,
    layoverHeadingLineHeight,
    layoverHeadingLetterSpacing,
    layoverHeadingTextTransform,
    layoverHeadingColor,
    layoverHeadingtopmargin,
    layoverHeadingbottommargin,
    layoverHeadingleftmargin,
    layoverHeadingrightmargin,
    layoverHeadingtopmarginTablet,
    layoverHeadingbottommarginTablet,
    layoverHeadingleftmarginTablet,
    layoverHeadingrightmarginTablet,
    layoverHeadingtopmarginMobile,
    layoverHeadingbottommarginMobile,
    layoverHeadingleftmarginMobile,
    layoverHeadingrightmarginMobile,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    imageTopMargin,
    imageBottomMargin,
    imageLeftMargin,
    imageRightMargin,
    imageTopMarginTablet,
    imageBottomMarginTablet,
    imageLeftMarginTablet,
    imageRightMarginTablet,
    imageTopMarginMobile,
    imageBottomMarginMobile,
    imageLeftMarginMobile,
    imageRightMarginMobile,
    imageTopPadding,
    imageTopPaddingMobile,
    imageTopPaddingTablet,
    imageBottomPadding,
    imageBottomPaddingMobile,
    imageBottomPaddingTablet,
    imageLeftPadding,
    imageLeftPaddingMobile,
    imageLeftPaddingTablet,
    imageRightPadding,
    imageRightPaddingMobile,
    imageRightPaddingTablet,
  } = props.attributes;
  var base_url = window.location.origin;
  var filtervalue =
    imageOnHoverImage === "grayscale"
      ? "grayscale(100%)"
      : imageOnHoverImage === "blur"
      ? "blur(5px)"
      : null;
  var zoomintransition =
    imageOnHoverImage === "zoomin" || "slide"
      ? "transform .35s ease-in-out"
      : null;
  var zoomintransform =
    imageOnHoverImage === "zoomin"
      ? "scale(1.1)"
      : imageOnHoverImage === "slide"
      ? "translate3d(0px, 0, 0)"
      : null;
  var slidetranform =
    imageOnHoverImage === "slide" ? "translate3d(-40px, 0, 0)" : null;
  var leftoverlayalign =
    LayoverContentPosition === "lefttop" ||
    LayoverContentPosition === "leftcenter" ||
    LayoverContentPosition === "leftbottom"
      ? "flex-start"
      : LayoverContentPosition === "centertop" ||
        LayoverContentPosition === "centercenter" ||
        LayoverContentPosition === "centerbottom"
      ? "center"
      : LayoverContentPosition === "righttop" ||
        LayoverContentPosition === "rightcenter" ||
        LayoverContentPosition === "rightbottom"
      ? "flex-end"
      : "center";
  var leftoverlayjustify =
    LayoverContentPosition === "lefttop" ||
    LayoverContentPosition === "centertop" ||
    LayoverContentPosition === "righttop"
      ? "flex-start"
      : LayoverContentPosition === "leftcenter" ||
        LayoverContentPosition === "centercenter" ||
        LayoverContentPosition === "rightcenter"
      ? "center"
      : LayoverContentPosition === "leftbottom" ||
        LayoverContentPosition === "centerbottom" ||
        LayoverContentPosition === "rightbottom"
      ? "flex-end"
      : "center";
  var selectors = {
    "": {
        "opacity": hideWidget ? 0.2 : 1,
        "padding-top": generateCSSUnit(imageTopPadding, "px"),
        "padding-bottom": generateCSSUnit(imageBottomPadding, "px"),
        "padding-left": generateCSSUnit(imageLeftPadding, "px"),
        "padding-right": generateCSSUnit(imageRightPadding, "px"),
        "margin-top": generateCSSUnit(imageTopMargin, "px"),
        "margin-bottom": generateCSSUnit(imageBottomMargin, "px"),
        "margin-left": generateCSSUnit(imageLeftMargin, "px"),
        "margin-right": generateCSSUnit(imageRightMargin, "px"),
    },
    " .img-main-block": {
      "text-align": imageAlignment,
    },
    " .img-block":{
      "transform": slidetranform,
    },
    "  .responsive-blocks-image-block": {
      width: generateCSSUnit(imageWidth, "px"),
      height: generateCSSUnit(imageHeight, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor,
      "object-fit": imageObjectFit,
      "-webkit-mask-image": MaskShape === "none" ? "" : `url("${base_url}/${MaskShape}")`,
      "mask-image": MaskShape === "none" ? "" : `url("${base_url}/${MaskShape}")`,
      "-webkit-mask-position": MaskPosition,
      "mask-position": MaskPosition,
      "-webkit-mask-repeat": MaskRepeat,
      "mask-repeat": MaskRepeat,
      "-webkit-mask-size": MaskSize,
      "mask-size": MaskSize,
      
    },
    " .responsive-image-block-description": {
      "align-items": leftoverlayalign,
      "justify-content": leftoverlayjustify,
      "border-color": layoverimageBorderColor,
      "border-width": generateCSSUnit(layoverimageBorderWidth, "px"),
      "border-radius": generateCSSUnit(layoverimageBorderRadius, "px"),
      "border-style": layoverimageBorderStyle,
      "top": generateCSSUnit(layoverInputDistance, "px"),
      "bottom": generateCSSUnit(layoverInputDistance, "px"),
      "right": generateCSSUnit(layoverInputDistance, "px"),
      "left": generateCSSUnit(layoverInputDistance, "px"),
      "background": layoverBackgroundcolor,
    },
    " .responsive-img-heading":{
      "font-family":layoverHeadingFontFamily,
      "font-size":generateCSSUnit(layoverHeadingFontSize, "px"),
      "font-weight":layoverHeadingFontWeight,
      "line-height":layoverHeadingLineHeight,
      "letter-spacing":generateCSSUnit(layoverHeadingLetterSpacing,"px"),
      "text-transform": layoverHeadingTextTransform,
      "color":layoverHeadingColor,
      "margin-top":generateCSSUnit(layoverHeadingtopmargin,"px"),
      "margin-bottom":generateCSSUnit(layoverHeadingbottommargin,"px"),
      "margin-left":generateCSSUnit(layoverHeadingleftmargin,"px"),
      "margin-right":generateCSSUnit(layoverHeadingrightmargin,"px"),
    },

    " .responsive-img-caption ": {
      "text-align": captionimageAlignment,
      "font-family": captionFontFamily,
      "font-size": generateCSSUnit(captionFontSize, "px"),
      "font-weight": captionFontWeight,
      "line-height": captionLineHeight,
      "letter-spacing": generateCSSUnit(captionLetterSpacing, "px"),
      "text-transform": captionTextTransform,
      "color": captionColor,
      "margin-top": generateCSSUnit(captiontopmargin, "px"),
      "margin-bottom": generateCSSUnit(captionbottommargin, "px"),
      "margin-left": generateCSSUnit(captionleftmargin, "px"),
      "margin-right": generateCSSUnit(captionrightmargin, "px"),
    },
    "  .img-main-block:hover figure": {
      "box-shadow":
        generateCSSUnit(imageboxShadowHoverHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverSpread, "px") +
        " " +
        imageboxShadowHoverColor,
      "filter": filtervalue,
      "transition": zoomintransition,
      "transform": zoomintransform,
    },
    " .responsive-image-block-description-overlay": {
      "opacity": generateCSSUnit(layoverOpacity, "%"),
    },
    " .responsive-image-block-description-overlay:hover": {
      "opacity": generateCSSUnit(layoverHoverOpacity, "%"),
    },
  };
  var tablet_selectors = {
    "": {
        "opacity": hideWidgetTablet ? 0.2 : 1,
        "padding-top": generateCSSUnit(imageTopPaddingTablet, "px"),
        "padding-bottom": generateCSSUnit(imageBottomPaddingTablet, "px"),
        "padding-left": generateCSSUnit(imageLeftPaddingTablet, "px"),
        "padding-right": generateCSSUnit(imageRightPaddingTablet, "px"),
        "margin-top": generateCSSUnit(imageTopMarginTablet, "px"),
        "margin-bottom": generateCSSUnit(imageBottomMarginTablet, "px"),
        "margin-left": generateCSSUnit(imageLeftMarginTablet, "px"),
        "margin-right": generateCSSUnit(imageRightMarginTablet, "px"),
    },
    " .img-main-block": {
      "text-align": imageAlignmentTablet,
    },
    "  .responsive-blocks-image-block": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "height": generateCSSUnit(imageHeightTablet, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor +
        " " +
        "!important",
    },
    " .responsive-img-heading": {
    "font-size":generateCSSUnit(layoverHeadingFontSizeTablet,"px"),
    "margin-top":generateCSSUnit(layoverHeadingtopmarginTablet,"px"),
    "margin-bottom":generateCSSUnit(layoverHeadingbottommarginTablet,"px"),
    "margin-left":generateCSSUnit(layoverHeadingleftmarginTablet,"px"),
    "margin-right":generateCSSUnit(layoverHeadingrightmarginTablet,"px"),
    },
    " .responsive-img-caption ": {
      "text-align": captionimageAlignmentTablet,
      "font-size": captionFontSizeTablet,
      "margin-top": generateCSSUnit(captiontopmarginTablet, "px"),
      "margin-bottom": generateCSSUnit(captionbottommarginTablet, "px"),
      "margin-left": generateCSSUnit(captionleftmarginTablet, "px"),
      "margin-right": generateCSSUnit(captionrightmarginTablet, "px"),
    },
  };

  var mobile_selectors = {
    "": {
        "opacity": hideWidgetMobile ? 0.2 : 1,
        "padding-top": generateCSSUnit(imageTopPaddingMobile, "px"),
        "padding-bottom": generateCSSUnit(imageBottomPaddingMobile, "px"),
        "padding-left": generateCSSUnit(imageLeftPaddingMobile, "px"),
        "padding-right": generateCSSUnit(imageRightPaddingMobile, "px"),
        "margin-top": generateCSSUnit(imageTopMarginMobile, "px"),
        "margin-bottom": generateCSSUnit(imageBottomMarginMobile, "px"),
        "margin-left": generateCSSUnit(imageLeftMarginMobile, "px"),
        "margin-right": generateCSSUnit(imageRightMarginMobile, "px"),
    },
    " .img-main-block": {
      "text-align": imageAlignmentMobile,
    },
    "  .responsive-blocks-image-block": {
      width: generateCSSUnit(imageWidthMobile, "px"),
      height: generateCSSUnit(imageHeightMobile, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor +
        " " +
        "!important",
    },
    " .responsive-img-heading": {
      "font-size":generateCSSUnit(layoverHeadingFontSizeMobile,"px"),
      "margin-top":generateCSSUnit(layoverHeadingtopmarginMobile,"px"),
      "margin-bottom":generateCSSUnit(layoverHeadingbottommarginMobile,"px"),
      "margin-left":generateCSSUnit(layoverHeadingleftmarginMobile,"px"),
      "margin-right":generateCSSUnit(layoverHeadingrightmarginMobile,"px"),
    },
    " .responsive-img-caption ": {
      "text-align": captionimageAlignmentMobile,
      "font-size": captionFontSizeMobile,
      "margin-top": generateCSSUnit(captiontopmarginMobile, "px"),
      "margin-bottom": generateCSSUnit(captionbottommarginMobile, "px"),
      "margin-left": generateCSSUnit(captionleftmarginMobile, "px"),
      "margin-right": generateCSSUnit(captionrightmarginMobile, "px"),
    },
  };
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}
export default EditorStyles;
