import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import VideoBackgroundControl from "../../../settings-components/BlockBackgroundSettings/VideoBackgroundSettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  InspectorAdvancedControls,
  BlockAlignmentToolbar,
  MediaUpload,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  PanelRow,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveVideo = this.onRemoveVideo.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }
  /*
   * Event to set Video as null while removing.
   */
  onRemoveVideo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundVideo: null });
  }

  /*
   * Event to set Video while adding.
   */
  onSelectVideo(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundVideo: null });
      return;
    }
    if (!media.type || "video" != media.type) {
      return;
    }
    setAttributes({ backgroundVideo: media });
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        mappingHeaders,
        isCollapsible,
        blockWidth,

        blockTopPadding,
        blockTopPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPadding,
        blockBottomPaddingTablet,
        blockBottomPaddingMobile,
        blockRightPadding,
        blockRightPaddingMobile,
        blockRightPaddingTablet,
        blockLeftPadding,
        blockLeftPaddingTablet,
        blockLeftPaddingMobile,
        blockTopMargin,
        blockTopMarginMobile,
        blockTopMarginTablet,
        blockBottomMargin,
        blockBottomMarginTablet,
        blockBottomMarginMobile,
        blockRightMargin,
        blockRightMarginMobile,
        blockRightMarginTablet,
        blockLeftMargin,
        blockLeftMarginTablet,
        blockLeftMarginMobile,

        z_index,
        z_indexMobile,
        z_indexTablet,

        headingFontFamily,
        headingFontWeight,
        headingFontSize,
        headingFontSizeTablet,
        headingFontSizeMobile,
        headingLineHeight,

        contentFontFamily,
        contentFontWeight,
        contentFontSize,
        contentFontSizeTablet,
        contentFontSizeMobile,
        contentLineHeight,
        align,

        headingColor,
        headingBgColor,
        headingColorHover,
        headingBgColorHover,

        bodyColor,
        bodyBgColor,
        bodyColorHover,
        bodyBgColorHover,

        headingTopPadding,
        headingTopPaddingMobile,
        headingTopPaddingTablet,
        headingBottomPadding,
        headingBottomPaddingTablet,
        headingBottomPaddingMobile,
        headingRightPadding,
        headingRightPaddingMobile,
        headingRightPaddingTablet,
        headingLeftPadding,
        headingLeftPaddingTablet,
        headingLeftPaddingMobile,
        headingTopMargin,
        headingTopMarginMobile,
        headingTopMarginTablet,
        headingBottomMargin,
        headingBottomMarginTablet,
        headingBottomMarginMobile,
        headingRightMargin,
        headingRightMarginMobile,
        headingRightMarginTablet,
        headingLeftMargin,
        headingLeftMarginTablet,
        headingLeftMarginMobile,

        contentTopPadding,
        contentTopPaddingMobile,
        contentTopPaddingTablet,
        contentBottomPadding,
        contentBottomPaddingTablet,
        contentBottomPaddingMobile,
        contentRightPadding,
        contentRightPaddingMobile,
        contentRightPaddingTablet,
        contentLeftPadding,
        contentLeftPaddingTablet,
        contentLeftPaddingMobile,
        contentTopMargin,
        contentTopMarginMobile,
        contentTopMarginTablet,
        contentBottomMargin,
        contentBottomMarginTablet,
        contentBottomMarginMobile,
        contentRightMargin,
        contentRightMarginMobile,
        contentRightMarginTablet,
        contentLeftMargin,
        contentLeftMarginTablet,
        contentLeftMarginMobile,

        blockBorderStyle,
        blockBorderWidth,
        headingBorderTopWidth,
        headingBorderBottomWidth,
        headingBorderLeftWidth,
        headingBorderRightWidth,
        headingBorderTopWidthMobile,
        headingBorderBottomWidthMobile,
        headingBorderLeftWidthMobile,
        headingBorderRightWidthMobile,
        headingBorderTopWidthTablet,
        headingBorderBottomWidthTablet,
        headingBorderLeftWidthTablet,
        headingBorderRightWidthTablet,
        blockBorderRadius,
        headingBorderTopLeftRadius,
        headingBorderTopRightRadius,
        headingBorderBottomLeftRadius,
        headingBorderBottomRightRadius,
        headingBorderTopLeftRadiusMobile,
        headingBorderTopRightRadiusMobile,
        headingBorderBottomLeftRadiusMobile,
        headingBorderBottomRightRadiusMobile,
        headingBorderTopLeftRadiusTablet,
        headingBorderTopRightRadiusTablet,
        headingBorderBottomLeftRadiusTablet,
        headingBorderBottomRightRadiusTablet,
        blockBorderColor,
        headingBorderStyle,
        headingBorderWidth,
        headingBorderRadius,
        headingBorderColor,
        bodyBorderStyle,
        bodyBorderWidth,
        bodyBorderTopWidth,
        bodyBorderLeftWidth,
        bodyBorderRightWidth,
        bodyBorderBottomWidth,

        bodyBorderTopWidthTablet,
        bodyBorderLeftWidthTablet,
        bodyBorderRightWidthTablet,
        bodyBorderBottomWidthTablet,

        bodyBorderTopWidthMobile,
        bodyBorderLeftWidthMobile,
        bodyBorderRightWidthMobile,
        bodyBorderBottomWidthMobile,

        bodyBorderTopLeftRadiusMobile,
        bodyBorderTopRightRadiusMobile,
        bodyBorderBottomLeftRadiusMobile,
        bodyBorderBottomRightRadiusMobile,

        bodyBorderTopLeftRadiusTablet,
        bodyBorderTopRightRadiusTablet,
        bodyBorderBottomLeftRadiusTablet,
        bodyBorderBottomRightRadiusTablet,
        
        bodyBorderTopLeftRadius,
        bodyBorderTopRightRadius,
        bodyBorderBottomLeftRadius,
        bodyBorderBottomRightRadius,

        bodyBorderRadius,
        bodyBorderColor,
        tableType,
        orderListType,

        headerLayout,
        backgroundColor,
        backgroundImage,
        backgroundType,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundVideo,
        sectionHtmlTag,
        allowedAnchors,
        smoothScroll,
        scrollOffset,
        icon,
        icon_color,
        size,
        sizeTablet,
        sizeMobile,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
      },
      setAttributes,
    } = this.props;

    const blockMarginResetValues = {
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			marginTabletTop: 0,
			marginTabletRight: 0,
			marginTabletBottom: 0,
			marginTabletLeft: 0,
			marginMobileTop: 0,
			marginMobileRight: 0,
			marginMobileBottom: 0,
			marginMobileLeft: 0,
		}
		const blockPaddingResetValues = {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			paddingTabletTop: 0,
			paddingTabletRight: 0,
			paddingTabletBottom: 0,
			paddingTabletLeft: 0,
			paddingMobileTop: 0,
			paddingMobileRight: 0,
			paddingMobileBottom: 0,
			paddingMobileLeft: 0,
		}

    const handleLayoutChange = (value) => {
      setAttributes({ headerLayout: value });
      if (value === "outline") {
        setAttributes({ headingBgColor: "#fff" });
        setAttributes({ headingColor: "#333" });
        setAttributes({ blockBorderStyle: "none" });
        setAttributes({ bodyBorderStyle: "solid" });
        setAttributes({ bodyBorderColor: "#0984ff" });
        setAttributes({ headingBorderStyle: "solid" });
        setAttributes({ headingBorderColor: "#0984ff" });
      } else {
        setAttributes({ headingBgColor: "#0984ff" });
        setAttributes({ headingColor: "#fff" });
        setAttributes({ blockBorderStyle: "solid" });
        setAttributes({ bodyBorderStyle: "none" });
        setAttributes({ headingBorderStyle: "none" });
        setAttributes({ headingBorderColor: "#0984ff" });
      }
    };

    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
      { value: "video", label: __("Video", "responsive-block-editor-addons") },
    ];

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Header Layout", "responsive-block-editor-addons")}
                value={headerLayout}
                onChange={(value) => handleLayoutChange(value)}
                options={[
                  { value: "fill", label: __("Fill Design", "responsive-block-editor-addons") },
                  { value: "outline", label: __("Outline Design", "responsive-block-editor-addons") },
                ]}
              />
              <Fragment>
                <h2>
                  {__("Header Alignment", "responsive-block-editor-addons")}
                </h2>
                <BlockAlignmentToolbar
                  value={align}
                  onChange={(value) =>
                    setAttributes({
                      align: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </Fragment>
              <SelectControl
                label={__("Table Type", "responsive-block-editor-addons")}
                value={tableType}
                onChange={(value) => setAttributes({ tableType: value })}
                options={[
                  { value: "ordered", label: __("Ordered", "responsive-block-editor-addons") },
                  { value: "unordered", label: __("Unordered", "responsive-block-editor-addons") },
                ]}
              />
              {tableType === "ordered" && (
                <SelectControl
                  label={__("Order List Type", "responsive-block-editor-addons")}
                  value={orderListType}
                  onChange={(value) => setAttributes({ orderListType: value })}
                  options={[
                    { value: "none", label: __("None", "responsive-block-editor-addons") },
                    { value: "number", label: __("Number", "responsive-block-editor-addons") },
                    { value: "uppercase", label: __("Uppercase Letters", "responsive-block-editor-addons") },
                    { value: "lowercase", label: __("Lowercase Letters", "responsive-block-editor-addons") },
                  ]}
                />
              )}
              <h2>{__("Select Headings", "responsive-block-editor-addons")}</h2>
              <PanelRow>
                <ToggleControl
                  label={__("H1", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h1"}
                  checked={allowedAnchors["h1"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h1: value },
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("H2", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h2"}
                  checked={allowedAnchors["h2"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h2: value },
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("H3", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h3"}
                  checked={allowedAnchors["h3"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h3: value },
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("H4", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h4"}
                  checked={allowedAnchors["h4"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h4: value },
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("H5", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h5"}
                  checked={allowedAnchors["h5"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h5: value },
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("H6", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h6"}
                  checked={allowedAnchors["h6"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h6: value },
                    })
                  }
                />
              </PanelRow>
              <br></br>
              <SelectControl
                label={__("Section HTML tag", "responsive-block-editor-addons")}
                value={sectionHtmlTag}
                onChange={(value) => setAttributes({ sectionHtmlTag: value })}
                options={[
                  { value: "section", label: __("Section", "responsive-block-editor-addons") },
                  { value: "div", label: __("Div", "responsive-block-editor-addons") },
                  { value: "footer", label: __("Footer", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
            <PanelBody title={__("Smooth Scroll", "responsive-block-editor-addons")} initialOpen={false}>
              <ToggleControl
                label={__("Enable Smooth Scroll", "responsive-block-editor-addons")}
                checked={smoothScroll}
                onChange={() => setAttributes({ smoothScroll: !smoothScroll })}
              />
              {smoothScroll === true && (
                <RangeControl
                  label={__("Scroll offset", "responsive-block-editor-addons")}
                  value={scrollOffset}
                  min={0}
                  max={200}
                  onChange={(scrollOffset) => setAttributes({ scrollOffset })}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Collapsible", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Collapsible Content",
                  "responsive-block-editor-addons"
                )}
                checked={isCollapsible}
                onChange={() =>
                  this.props.setAttributes({
                    isCollapsible: !isCollapsible,
                  })
                }
              />
            </PanelBody>
            { isCollapsible &&
            <>
              <PanelBody
                title={__("Icon", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <Fragment>
                <p className="components-base-control__label">
                  {__("Select Icon", "responsive-block-editor-addons")}
                </p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  // isMulti={false}
                  noSelectedPlaceholder={__(
                    "Select Icon",
                    "responsive-block-editor-addons"
                  )}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
              </Fragment>
              <TabPanel
              className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
              activeClass="active-tab"
              tabs={[
                {
                  name: "desktop",
                  title: <Dashicon icon="desktop" />,
                  className:
                    " responsive-desktop-tab  responsive-responsive-tabs",
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                  className:
                    " responsive-tablet-tab  responsive-responsive-tabs",
                },
                {
                  name: "mobile",
                  title: <Dashicon icon="smartphone" />,
                  className:
                    " responsive-mobile-tab  responsive-responsive-tabs",
                },
              ]}
            >
                {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Icon Size Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={sizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                sizeMobile: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Icon Size Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={sizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                sizeTablet: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Icon Size",
                              "responsive-block-editor-addons"
                            )}
                            value={size}
                            onChange={(value) =>
                              setAttributes({
                                size: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              </PanelBody>
            </>
            }
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Heading", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Color Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("hover" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__(
                              "Hover Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: headingColorHover }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={headingColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ headingColorHover: colorValue })
                            }
                            allowReset
                          />
                          <p className="responsive-setting-label">
                            {__(
                              "Background Hover Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: headingBgColorHover }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={headingBgColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ headingBgColorHover: colorValue })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: headingColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={headingColor}
                            onChange={(colorValue) =>
                              setAttributes({ headingColor: colorValue })
                            }
                            allowReset
                          />
                          <p className="responsive-setting-label">
                            {__(
                              "Background Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: headingBgColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={headingBgColor}
                            onChange={(colorValue) =>
                              setAttributes({ headingBgColor: colorValue })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <TypographyHelperControl
                title={__("Typography", "responsive-block-editor-addons")}
                attrNameTemplate="heading%s"
                values={{
                  family: headingFontFamily,
                  size: headingFontSize,
                  sizeMobile: headingFontSizeMobile,
                  sizeTablet: headingFontSizeTablet,
                  weight: headingFontWeight,
                  height: headingLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingTopPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingRightPaddingMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingTopPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingRightPaddingTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopPadding}
                            onChange={(value) =>
                              setAttributes({
                                headingTopPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomPadding}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftPadding}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightPadding}
                            onChange={(value) =>
                              setAttributes({
                                headingRightPadding: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingTopMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingRightMarginMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingTopMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingRightMarginTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingTopMargin}
                            onChange={(value) =>
                              setAttributes({
                                headingTopMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingBottomMargin}
                            onChange={(value) =>
                              setAttributes({
                                headingBottomMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingLeftMargin}
                            onChange={(value) =>
                              setAttributes({
                                headingLeftMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={headingRightMargin}
                            onChange={(value) =>
                              setAttributes({
                                headingRightMargin: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Border Style")}
                  value={headingBorderStyle}
                  onChange={(value) =>
                    setAttributes({ headingBorderStyle: value })
                  }
                  options={[
                    { value: "none", label: __("None") },
                    { value: "solid", label: __("Solid") },
                    { value: "dotted", label: __("Dotted") },
                    { value: "dashed", label: __("Dashed") },
                    { value: "double", label: __("Double") },
                    { value: "groove", label: __("Groove") },
                    { value: "inset", label: __("Inset") },
                    { value: "outset", label: __("Outset") },
                    { value: "ridge", label: __("Ridge") },
                  ]}
                />
                {"none" != headingBorderStyle && (
                  <Fragment>
                  <BaseControl.VisualLabel>
                      {__("Border Width:", "responsive-block-editor-addons")}
                    </BaseControl.VisualLabel> 
                    <br></br>                 
                  <TabPanel
                    className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                    activeClass="active-tab"
                    tabs={[
                      {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className:
                          " responsive-desktop-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className:
                          " responsive-tablet-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className:
                          " responsive-mobile-tab  responsive-responsive-tabs",
                      },
                    ]}
                  >
                    {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderBottomWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderLeftWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderRightWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidthMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderBottomWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderLeftWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderRightWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidthTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderBottomWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderLeftWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderRightWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidth: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </Fragment>
                )}
                <br></br>
                <BaseControl.VisualLabel>
                    {__("Border Radius:", "responsive-block-editor-addons")}
                  </BaseControl.VisualLabel>
                  <br></br>
                  <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopLeftRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopLeftRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopRightRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopRightRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomLeftRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomLeftRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomRightRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomRightRadiusMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left(Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopLeftRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopLeftRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopRightRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopRightRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomLeftRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomLeftRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomRightRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomRightRadiusTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopLeftRadius}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopLeftRadius: value !== undefined ? value : "",
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderTopRightRadius}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderTopRightRadius: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomLeftRadius}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomLeftRadius: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={headingBorderBottomRightRadius}
                            onChange={(value) =>
                              setAttributes({
                                headingBorderBottomRightRadius: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                {"none" != headingBorderStyle && (
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Border Color")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: headingBorderColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={headingBorderColor}
                      onChange={(colorValue) =>
                        setAttributes({ headingBorderColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Background Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <ColorBackgroundControl {...this.props} />
              )}
              {"image" == backgroundType && (
                <Fragment>
                  <BaseControl
                    className="editor-bg-image-control"
                    label={__(
                      "Background Image",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <MediaUpload
                      title={__(
                        "Select Background Image",
                        "responsive-block-editor-addons"
                      )}
                      onSelect={this.onSelectImage}
                      allowedTypes={["image"]}
                      value={backgroundImage}
                      render={({ open }) => (
                        <Button isDefault onClick={open}>
                          {!backgroundImage
                            ? __(
                                "Select Background Image",
                                "responsive-block-editor-addons"
                              )
                            : __(
                                "Replace image",
                                "responsive-block-editor-addons"
                              )}
                        </Button>
                      )}
                    />
                    {backgroundImage && (
                      <Button
                        className="responsive-rm-btn"
                        onClick={this.onRemoveImage}
                        isLink
                        isDestructive
                      >
                        {__("Remove Image", "responsive-block-editor-addons")}
                      </Button>
                    )}
                  </BaseControl>
                  {backgroundImage && (
                    <Fragment>
                      <SelectControl
                        label={__("Image Position", "responsive-block-editor-addons")}
                        value={backgroundPosition}
                        onChange={(value) =>
                          setAttributes({ backgroundPosition: value })
                        }
                        options={[
                          { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
                          { value: "top center", label: __("Top Center", "responsive-block-editor-addons") },
                          { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                          { value: "center left", label: __("Center Left", "responsive-block-editor-addons") },
                          {
                            value: "center center",
                            label: __("Center Center", "responsive-block-editor-addons"),
                          },
                          { value: "center right", label: __("Center Right", "responsive-block-editor-addons") },
                          { value: "bottom left", label: __("Bottom Left", "responsive-block-editor-addons") },
                          {
                            value: "bottom center",
                            label: __("Bottom Center", "responsive-block-editor-addons"),
                          },
                          { value: "bottom right", label: __("Bottom Right", "responsive-block-editor-addons") },
                        ]}
                      />
                      <SelectControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        value={backgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backgroundRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                      />
                      <SelectControl
                        label={__("Size", "responsive-block-editor-addons")}
                        value={backgroundSize}
                        onChange={(value) =>
                          setAttributes({ backgroundSize: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
              {"video" == backgroundType && (
                <VideoBackgroundControl {...this.props} />
              )}
            </PanelBody>
            <PanelBody
              title={__("Body", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Color Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("hover" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__(
                              "Hover Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: bodyColorHover }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={bodyColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ bodyColorHover: colorValue })
                            }
                            allowReset
                          />
                          <p className="responsive-setting-label">
                            {__(
                              "Background Hover Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: bodyBgColorHover }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={bodyBgColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ bodyBgColorHover: colorValue })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: bodyColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={bodyColor}
                            onChange={(colorValue) =>
                              setAttributes({ bodyColor: colorValue })
                            }
                            allowReset
                          />
                          <p className="responsive-setting-label">
                            {__(
                              "Background Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: bodyBgColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={bodyBgColor}
                            onChange={(colorValue) =>
                              setAttributes({ bodyBgColor: colorValue })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <TypographyHelperControl
                title={__("Typography", "responsive-block-editor-addons")}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentTopPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftPaddingMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightPaddingMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentRightPaddingMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentTopPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftPaddingTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightPaddingTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentRightPaddingTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopPadding}
                            onChange={(value) =>
                              setAttributes({
                                contentTopPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomPadding}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftPadding}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftPadding: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Padding",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightPadding}
                            onChange={(value) =>
                              setAttributes({
                                contentRightPadding: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentTopMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftMarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightMarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentRightMarginMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentTopMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftMarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightMarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentRightMarginTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentTopMargin}
                            onChange={(value) =>
                              setAttributes({
                                contentTopMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentBottomMargin}
                            onChange={(value) =>
                              setAttributes({
                                contentBottomMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Left Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentLeftMargin}
                            onChange={(value) =>
                              setAttributes({
                                contentLeftMargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right Margin",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            value={contentRightMargin}
                            onChange={(value) =>
                              setAttributes({
                                contentRightMargin: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Border Style")}
                  value={bodyBorderStyle}
                  onChange={(value) =>
                    setAttributes({ bodyBorderStyle: value })
                  }
                  options={[
                    { value: "none", label: __("None") },
                    { value: "solid", label: __("Solid") },
                    { value: "dotted", label: __("Dotted") },
                    { value: "dashed", label: __("Dashed") },
                    { value: "double", label: __("Double") },
                    { value: "groove", label: __("Groove") },
                    { value: "inset", label: __("Inset") },
                    { value: "outset", label: __("Outset") },
                    { value: "ridge", label: __("Ridge") },
                  ]}
                />
                {"none" != bodyBorderStyle && (
                  <Fragment>
                  <BaseControl.VisualLabel>
                      {__("Border Width:", "responsive-block-editor-addons")}
                    </BaseControl.VisualLabel> 
                    <br></br>                 
                  <TabPanel
                    className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                    activeClass="active-tab"
                    tabs={[
                      {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className:
                          " responsive-desktop-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className:
                          " responsive-tablet-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className:
                          " responsive-mobile-tab  responsive-responsive-tabs",
                      },
                    ]}
                  >
                    {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderBottomWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderLeftWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderRightWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidthMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderBottomWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderLeftWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderRightWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidthTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderBottomWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderLeftWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderRightWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidth: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </Fragment>
                )}
                <br></br>
                <BaseControl.VisualLabel>
                    {__("Border Radius:", "responsive-block-editor-addons")}
                  </BaseControl.VisualLabel>
                  <br></br>
                  <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopLeftRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopLeftRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopRightRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopRightRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomLeftRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomLeftRadiusMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right (Mobile)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomRightRadiusMobile}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomRightRadiusMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left(Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopLeftRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopLeftRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopRightRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopRightRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomLeftRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomLeftRadiusTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right (Tablet)",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomRightRadiusTablet}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomRightRadiusTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Top Left",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopLeftRadius}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopLeftRadius: value !== undefined ? value : "",
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Top Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderTopRightRadius}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderTopRightRadius: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Left",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomLeftRadius}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomLeftRadius: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset
                            value={bodyBorderBottomRightRadius}
                            onChange={(value) =>
                              setAttributes({
                                bodyBorderBottomRightRadius: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                {"none" != bodyBorderStyle && (
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Border Color")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: bodyBorderColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={bodyBorderColor}
                      onChange={(colorValue) =>
                        setAttributes({ bodyBorderColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <RangeControl
                  label={__("Width", "responsive-block-editor-addons")}
                  value={blockWidth}
                  onChange={(value) =>
                    this.props.setAttributes({
                      blockWidth: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
                <ResponsiveNewPaddingControl
                attrNameTemplate="block%s"
                resetValues={blockPaddingResetValues}
                {...this.props}
                />
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
                  {...this.props}
                />
            </PanelBody>
            { isCollapsible &&
              <>
              <PanelBody
               title={__("Icon", "responsive-block-editor-addons")}
               initialOpen={false}
              >
                <p className="responsive-block-editor-addons-setting-label">
                {__("Icon Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: icon_color }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={icon_color}
                onChange={(value) => setAttributes({ icon_color: value })}
                allowReset
              />

              </PanelBody>
              </>
            }
          </InspectorTab>
          <InspectorTab key={"advance"}>
          <PanelBody
              title={__("Responsive Conditions", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                "Hide on Desktop",
                "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Tablet",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Mobile",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
              </TabPanel>
            </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}