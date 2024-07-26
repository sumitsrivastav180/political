/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    expandAlignment,
    linkSpace,
    textSpace,
    titleSpace,
    linkSpaceMobile,
    textSpaceMobile,
    titleSpaceMobile,
    linkSpaceTablet,
    textSpaceTablet,
    titleSpaceTablet,
    titleFontFamily,
    titleFontSize,
    titleFontWeight,
    titleLineHeight,
    textFontFamily,
    textFontSize,
    textFontWeight,
    textLineHeight,
    linkFontFamily,
    linkFontSize,
    linkFontWeight,
    linkLineHeight,
    textColor,
    linkColor,
    titleColor,
	titleFontSizeMobile,
	titleFontSizeTablet,
	textFontSizeMobile,
	textFontSizeTablet,
	linkFontSizeMobile,
	linkFontSizeTablet,
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
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
  blockTopMargin,
  blockTopMarginMobile,
  blockTopMarginTablet,
  blockBottomMargin,
  blockBottomMarginMobile,
  blockBottomMarginTablet,
  blockLeftMargin,
  blockLeftMarginMobile,
  blockLeftMarginTablet,
  blockRightMargin,
  blockRightMarginMobile,
  blockRightMarginTablet,
  } = props.attributes;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
    },

    " .responsive-block-editor-addons-expand-block-content": {
      "text-align": expandAlignment,
    },

    " .responsive-block-editor-addons-expand-title": {
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
      "color": titleColor,
    },

    " .responsive-block-editor-addons-expand-less-text": {
      "margin-bottom": generateCSSUnit(textSpace, "px"),
      "font-family": textFontFamily,
      "font-size": generateCSSUnit(textFontSize, "px"),
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
      "color": textColor,
    },

    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpace, "px"),
      "font-family": linkFontFamily,
      "font-size": generateCSSUnit(linkFontSize, "px"),
      "font-weight": linkFontWeight,
      "line-height": linkLineHeight,
      "color": linkColor,
    },

    " .responsive-block-editor-addons-expand-more-text": {
      "margin-bottom": generateCSSUnit(textSpace, "px"),
      "font-family": textFontFamily,
      "font-size": generateCSSUnit(textFontSize, "px"),
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
      "color": textColor,
    },

    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpace, "px"),
      "font-family": linkFontFamily,
      "font-size": generateCSSUnit(linkFontSize, "px"),
      "font-weight": linkFontWeight,
      "line-height": linkLineHeight,
      "color": linkColor,
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-title": {
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
	  "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-less-text": {
      "margin-bottom": generateCSSUnit(textSpaceMobile, "px"),
	  "font-size": generateCSSUnit(textFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpaceMobile, "px"),
	  "font-size": generateCSSUnit(linkFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-more-text": {
      "margin-bottom": generateCSSUnit(textSpaceMobile, "px"),
	  "font-size": generateCSSUnit(textFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpaceMobile, "px"),
	  "font-size": generateCSSUnit(linkFontSizeMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-title": {
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
	  "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-less-text": {
      "margin-bottom": generateCSSUnit(textSpaceTablet, "px"),
	  "font-size": generateCSSUnit(textFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpaceTablet, "px"),
	  "font-size": generateCSSUnit(linkFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-more-text": {
      "margin-bottom": generateCSSUnit(textSpaceTablet, "px"),
	  "font-size": generateCSSUnit(textFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpaceTablet, "px"),
	  "font-size": generateCSSUnit(linkFontSizeTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-expand.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
