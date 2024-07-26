/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    imageboxesBlock,
    count,
    gutter,
    contentAlign,
    itemBackgroundColor,
    itemHoverBackgroundColor,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    boxPaddingRight,
    boxPaddingLeft,
    boxPaddingTop,
    boxPaddingBottom,
    boxHeight,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    secondaryBackgroundColor,
    hoverSecondaryBackgroundColor,
    bgGradient,
    hoverGradientDegree,
    hoverBgGradient,
    imageHoverEffect,
    hoverOpacity,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    titleColor,
    descriptionFontFamily,
    descriptionFontSize,
    descriptionFontWeight,
    descriptionLineHeight,
    descriptionColor,
    imageSize,
    verticalAlignment,
    titleSpacing,
    titleSpacingMobile,
    titleSpacingTablet,
    descriptionSpacing,
    descriptionSpacingMobile,
    descriptionSpacingTablet,
    arrowColor,
    arrowSize,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    gradientDegree,
    blockBorderRadius,
    blockBorderColor,
    blockBorderStyle,
    blockBorderWidth,
    descriptionFontSizeMobile,
    descriptionFontSizeTablet,
    boxRadius,//For compatibility with v1.3.2
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    blockTopMargin,
    blockBottomMargin,
    blockLeftMargin,
    blockRightMargin,
    blockTopMarginTablet,
    blockBottomMarginTablet,
    blockLeftMarginTablet,
    blockRightMarginTablet,
    blockTopMarginMobile,
    blockBottomMarginMobile,
    blockLeftMarginMobile,
    blockRightMarginMobile,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingMobile,
    blockBottomPaddingTablet,
    blockLeftPadding,
    blockLeftPaddingMobile,
    blockLeftPaddingTablet,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
  } = props.attributes;

  let imgopacity = opacity / 100;
  let hoverImgopacity = hoverOpacity / 100;

  var tempsecondaryBackgroundColor = bgGradient
    ? secondaryBackgroundColor
    : itemBackgroundColor;
  var tempHoverSecondaryBackgroundColor = hoverBgGradient
    ? hoverSecondaryBackgroundColor
    : itemHoverBackgroundColor;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var hoverGradient =
    "linear-gradient(" +
    hoverGradientDegree +
    "deg," +
    hexToRgba(itemHoverBackgroundColor || "#ffffff", hoverImgopacity || 0) +
    "," +
    hexToRgba(
      tempHoverSecondaryBackgroundColor || "#ffffff",
      hoverImgopacity || 0
    ) +
    ")";

    let backgroundImageFirst = `linear-gradient( 
    ${gradientDegree}deg,
    ${hexToRgba(
      itemBackgroundColor || "#ffffff",
      imgopacity || 0
    )},
    ${hexToRgba(
      tempsecondaryBackgroundColor || "#ffffff",
      imgopacity || 0
    )}),url(${backgroundImageOne})`

    let backgroundImageSecond = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageTwo})`

    let backgroundImageThird = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageThree})`

    let backgroundImageFourth = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageFour})`

    let gutterMargin = ""
    if( count > 1){
      if(gutter === "small"){
        gutterMargin = '20px'
      }else if (gutter === "medium"){
        gutterMargin = '30px'
      }else if (gutter === "large"){
        gutterMargin = '40px'
      }else if (gutter === "huge"){
        gutterMargin = '50px'
      }else {
        gutterMargin = '';
      }
    }

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "background-color": itemBackgroundColor,
      "text-align": contentAlign,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": boxRadius !== 999 && blockBorderRadius === '' ? generateCSSUnit(boxRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), // For compatibility with v1.3.2.
      "justify-content": verticalAlignment + "!important",
      "background-color": `${hexToRgba(
        itemBackgroundColor || "#fff",
        imgopacity || 0
      )}`,
      "background-size": backgroundSize,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPosition,
      "padding-left": generateCSSUnit(boxPaddingLeft, "px"),
      "padding-right": generateCSSUnit(boxPaddingRight, "px"),
      "padding-bottom": generateCSSUnit(boxPaddingBottom, "px"),
      "padding-top": generateCSSUnit(boxPaddingTop, "px"),
      height: generateCSSUnit(boxHeight, "px"),
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
    },

    ".responsive-block-editor-addons-block-image-boxes-0": {
      "background-image": backgroundImageFirst,
    },
    ".responsive-block-editor-addons-block-image-boxes-1": {
        "background-image": backgroundImageSecond,
    },
    ".responsive-block-editor-addons-block-image-boxes-2": {
        "background-image": backgroundImageThird,
    },
    ".responsive-block-editor-addons-block-image-boxes-3": {
        "background-image": backgroundImageFourth,
    },

    ":hover .responsive-block-editor-addons-add-image": {
      "background-image": hoverGradient,
      "border-radius": boxRadius !== 999 && blockBorderRadius === '' ? generateCSSUnit(boxRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), //For compatibility with v1.3.2.
    },

    ":hover": {
      "transform": `scale(${imageHoverEffect})`,
    },

    " .responsive-block-editor-addons-imagebox-image": {
      width: imageSize,
      "max-width": 100 + "%",
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "line-height": titleLineHeight,
      color: titleColor,
      "margin-bottom": generateCSSUnit(titleSpacing, "px"),
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
      "font-family": descriptionFontFamily,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-weight": descriptionFontWeight,
      "line-height": descriptionLineHeight,
      color: descriptionColor,
      "margin-bottom": generateCSSUnit(descriptionSpacing, "px"),
    },
    " .imagebox-arrow": {
      color: arrowColor,
      "font-size": generateCSSUnit(arrowSize, "px"),
    },
  };

  var mobile_selectors = {
    "": {
        "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleSpacingMobile, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
    "margin-bottom": generateCSSUnit(descriptionSpacingMobile, "px"),
	},
  };

  var tablet_selectors = {
    "": {
        "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleSpacingTablet, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
    	"margin-bottom": generateCSSUnit(descriptionSpacingTablet, "px"),
	},
  };

  var externalStyles = {
      ".wp-block-responsive-block-editor-addons-image-boxes-block-item-wrapper": {
        "margin-bottom": `${gutterMargin}!important`,
      },
    }
    
  var mainContainerDesktopStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    }
  }
  var mainContainerTabletStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    }
  }
  var mainContainerMobileStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    }
  }
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-boxes.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(externalStyles, "", true, "mobile");
  styling_css += generateCSS(mainContainerDesktopStyles, '',);
  styling_css += generateCSS(mainContainerTabletStyles, "", true, "tablet");
  styling_css += generateCSS(mainContainerMobileStyles, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
