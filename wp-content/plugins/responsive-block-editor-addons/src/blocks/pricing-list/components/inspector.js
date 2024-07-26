/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getImageName = this.getImageName.bind(this);
    this.onRemoveTestImage = this.onRemoveTestImage.bind(this);
    this.onSelectTestImage = this.onSelectTestImage.bind(this);
  }
  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    let imag_url = null;
    if (!media || !media.url) {
      imag_url = null;
    } else {
      imag_url = media;
    }

    if (!media.type || "image" !== media.type) {
      imag_url = null;
    }

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        (item["image"] = imag_url), (item["imageUrl"] = imag_url);
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { pricingList } = this.props.attributes;

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }
    return image_name;
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        pricingList,
        priceColor,
        descColor,
        titleColor,
        titleFontFamily,
        titleFontSize,
        titleFontWeight,
        titleLineHeight,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontWeight,
        descriptionLineHeight,
        priceFontFamily,
        priceFontSize,
        priceFontWeight,
        priceLineHeight,
        titleSpace,
        titleSpaceMobile,
        titleSpaceTablet,
        columns,
        rowGap,
        rowGapMobile,
        rowGapTablet,
        columnGap,
        columnGapMobile,
        columnGapTablet,
        contentAlign,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        seperatorStyle,
        seperatorWidth,
        seperatorThickness,
        seperatorColor,
        count,
        imagePosition,
        imageSize,
        imageWidth,
		titleFontSizeMobile,
		titleFontSizeTablet,
		descriptionFontSizeMobile,
		descriptionFontSizeTablet,
		priceFontSizeMobile,
		priceFontSizeTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    z_index,
    z_indexMobile,
    z_indexTablet,
    pricingTopMargin,
    pricingBottomMargin,
    pricingLeftMargin,
    pricingRightMargin,
    pricingTopMarginTablet,
    pricingBottomMarginTablet,
    pricingLeftMarginTablet,
    pricingRightMarginTablet,
    pricingTopMarginMobile,
    pricingBottomMarginMobile,
    pricingLeftMarginMobile,
    pricingRightMarginMobile,
    pricingIsMarginControlConnected,
    pricingTopPadding,
    pricingTopPaddingMobile,
    pricingTopPaddingTablet,
    pricingBottomPadding,
    pricingBottomPaddingMobile,
    pricingBottomPaddingTablet,
    pricingLeftPadding,
    pricingLeftPaddingMobile,
    pricingLeftPaddingTablet,
    pricingRightPadding,
    pricingRightPaddingMobile,
    pricingRightPaddingTablet,
    pricingIsPaddingControlConnected,
    },
      setAttributes,
    } = this.props;

    const pricingMarginResetValues = {
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
    const pricingPaddingResetValues = {
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

    const tmControls = (index) => {
      let image_val = null;
      if (pricingList[index] && typeof pricingList[index] !== "undefined") {
        image_val = pricingList[index]["image"];
      }
      return (
        <PanelBody
          key={index}
          title={__("Image", "responsive-block-editor-addons") + " " + (index + 1) + " " + __("Settings", "responsive-block-editor-addons")}
          initialOpen={true}
          className={"responsive-repeater-panel"}
        >
          <BaseControl className="editor-bg-image-control" label={__("", "responsive-block-editor-addons")}>
            <MediaUpload
              title={__("Select Image" + (index + 1), "responsive-block-editor-addons")}
              onSelect={(media) => {
                this.onSelectTestImage(media, index);
              }}
              allowedTypes={["image"]}
              value={image_val}
              render={({ open }) => (
                <Button isDefault onClick={open}>
                  {this.getImageName(pricingList[index]["image"])}
                </Button>
              )}
            />
            {image_val &&
              pricingList[index]["image"].url !== null &&
              pricingList[index]["image"].url !== "" && (
                <Button
                  className="responsive-rm-btn"
                  key={index}
                  onClick={(value) => {
                    this.onRemoveTestImage(index);
                  }}
                  isLink
                  isDestructive
                >
                  {__("Remove Image", "responsive-block-editor-addons")}
                </Button>
              )}
          </BaseControl>
        </PanelBody>
      );
    };

    // Font Weight Options
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
    let cnt = 0;
    pricingList.map((item, thisIndex) => {
      let image_arr = pricingList[thisIndex];
      if (image_arr && typeof image_arr !== "undefined") {
        const image = image_arr["image"];
        if (typeof image !== "undefined" && image !== null && image !== "") {
          cnt++;
        }
      }
    });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Number of Items", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...pricingList];
                  if (cloneTest_block.length < newCount) {
                    const inc_description = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    var desc_text = __(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "responsive-block-editor-addons"
                    );
                    {
                      times(inc_description, (n) => {
                        cloneTest_block.push({
                          title: "Menu Item " + newCount,
                          description: desc_text,
                          price: "$9",
                          imageId: "",
                          image: "",
                          imageUrl: "",
                        });
                      });
                    }
                    setAttributes({ pricingList: cloneTest_block });
                  } else {
                    const inc_description = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < inc_description; i++) {
                      data_new.pop();
                    }
                    setAttributes({ pricingList: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={20}
                step={1}
              />
              <RangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={columns}
                onChange={(value) =>
                  setAttributes({ columns: value !== undefined ? value : 2 })
                }
                min={1}
                max={3}
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {times(count, (n) => tmControls(n))}
              {cnt > 0 && (
                <Fragment>
                  <hr className="uagb-editor__separator" />
                  <SelectControl
                    label={__("Image Position", "responsive-block-editor-addons")}
                    value={imagePosition}
                    onChange={(value) =>
                      setAttributes({ imagePosition: value })
                    }
                    options={[
                      { value: "top", label: __("Top", "responsive-block-editor-addons") },
                      { value: "left", label: __("Left", "responsive-block-editor-addons") },
                      { value: "right", label: __("Right", "responsive-block-editor-addons") },
                    ]}
                  />

                  <SelectControl
                    label={__("Image Size", "responsive-block-editor-addons")}
                    options={[
                      { value: "full", label: __("Full", "responsive-block-editor-addons") },
                      { value: "thumbnail", label: __("Thumbnail", "responsive-block-editor-addons") },
                      { value: "medium", label: __("Medium", "responsive-block-editor-addons") },
                      { value: "large", label: __("Large", "responsive-block-editor-addons") },
                    ]}
                    value={imageSize}
                    onChange={(value) => setAttributes({ imageSize: value })}
                  />
                  <RangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={imageWidth}
                    onChange={(value) => setAttributes({ imageWidth: value })}
                    min={0}
                    max={500}
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title={__("Separator", "responsive-block-editor-addons")} initialOpen={false}>
              <SelectControl
                label={__("Separator Style", "responsive-block-editor-addons")}
                value={seperatorStyle}
                onChange={(value) => setAttributes({ seperatorStyle: value })}
                options={[
                  { value: "none", label: __("None", "responsive-block-editor-addons") },
                  { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                  { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                  { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                  { value: "double", label: __("Double", "responsive-block-editor-addons") },
                  { value: "groove", label: __("Groove", "responsive-block-editor-addons") },
                  { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                  { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
                  { value: "ridge", label: __("Ridge", "responsive-block-editor-addons") },
                ]}
              />
              {"none" != seperatorStyle && (
                <Fragment>
                  <RangeControl
                    label={__("Separator Width (%)", "responsive-block-editor-addons")}
                    value={seperatorWidth}
                    onChange={(value) =>
                      setAttributes({
                        seperatorWidth: value !== undefined ? value : 100,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                  <RangeControl
                    label={__("Separator Thickness", "responsive-block-editor-addons")}
                    value={seperatorThickness}
                    onChange={(value) =>
                      setAttributes({
                        seperatorThickness: value !== undefined ? value : 1,
                      })
                    }
                    min={0}
                    max={20}
                    allowReset
                  />
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Separator Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: seperatorColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={seperatorColor}
                      onChange={(colorValue) =>
                        setAttributes({ seperatorColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="responsive-setting-label">
                {__("Title Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: titleColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={titleColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    titleColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Content Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: descColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={descColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    descColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Price Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: priceColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={priceColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    priceColor: value,
                  })
                }
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<TypographyHelperControl
					title={__("Title Typography", "responsive-block-editor-addons")}
					attrNameTemplate="title%s"
					values={{
					family: titleFontFamily,
					size: titleFontSize,
					sizeMobile: titleFontSizeMobile,
					sizeTablet: titleFontSizeTablet,
					weight: titleFontWeight,
					height: titleLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__(
					"Description Typography",
					"responsive-block-editor-addons"
					)}
					attrNameTemplate="description%s"
					values={{
					family: descriptionFontFamily,
					size: descriptionFontSize,
					sizeMobile: descriptionFontSizeMobile,
					sizeTablet: descriptionFontSizeTablet,
					weight: descriptionFontWeight,
					height: descriptionLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Price Typography", "responsive-block-editor-addons")}
					attrNameTemplate="price%s"
					values={{
					family: priceFontFamily,
					size: priceFontSize,
					sizeMobile: priceFontSizeMobile,
					sizeTablet: priceFontSizeTablet,
					weight: priceFontWeight,
					height: priceLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Block Spacing", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <ResponsiveNewPaddingControl
                  attrNameTemplate="pricing%s"
                  resetValues={pricingPaddingResetValues}
                  {...this.props}
                  />
                <ResponsiveNewMarginControl
                  attrNameTemplate="pricing%s"
                  resetValues={pricingMarginResetValues}
                  {...this.props}
                  />
              </PanelBody>
              <ResponsiveSpacingControl
                title={"Row Gap"}
                attrNameTemplate="rowGap%s"
                values={{
                  desktop: rowGap,
                  tablet: rowGapTablet,
                  mobile: rowGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Column Gap"}
                attrNameTemplate="columnGap%s"
                values={{
                  desktop: columnGap,
                  tablet: columnGapTablet,
                  mobile: columnGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title Bottom Margin"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: blockTopPadding,
                  desktopBottom: blockBottomPadding,
                  desktopLeft: blockLeftPadding,
                  desktopRight: blockRightPadding,

                  tabletTop: blockTopPaddingTablet,
                  tabletBottom: blockBottomPaddingTablet,
                  tabletLeft: blockLeftPaddingTablet,
                  tabletRight: blockRightPaddingTablet,

                  mobileTop: blockTopPaddingMobile,
                  mobileBottom: blockBottomPaddingMobile,
                  mobileLeft: blockLeftPaddingMobile,
                  mobileRight: blockRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
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
