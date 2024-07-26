/**
 * Inspector Controls
 */

import times from "lodash/times";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import moment from "moment";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { dateI18n, __experimentalGetSettings } = wp.date;

// Import block components
const { InspectorControls, PanelColorSettings, ColorPalette } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TextControl,
  TabPanel,
  Dashicon,
  Icon,
} = wp.components;
let svg_icons = Object.keys(ResponsiveBlocksIcon);
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getIfbIcon = this.getIfbIcon.bind(this);
  }
  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
  }

  saveDate(value, index) {
    const { attributes, setAttributes } = this.props;
    const { t_date } = attributes;

    const newItems = t_date.map((item, thisIndex) => {
      if (index === thisIndex) {
        item = { ...item, ...value };
      }

      return item;
    });

    setAttributes({
      t_date: newItems,
    });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        displayPostDate,
        timelineItems,
        t_date,
        timelinAlignment,
        dateFormat,
        dateBottomspace,
        dateColor,
        backgroundColor,
        headingColor,
        contentColor,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        dateLineHeight,
        dateFontWeight,
        dateFontSize,
        headingLineHeight,
        headingFontWeight,
        headingFontSize,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        headingTag,
        itemBorderRadius,
        itemPadding,
        horizontalSpace,
        verticalSpace,
        horizontalSpaceMobile,
        verticalSpaceMobile,
        horizontalSpaceTablet,
        verticalSpaceTablet,
        itemBorderWidth,
        itemBorderStyle,
        itemBorderColor,
        opacity,
        separatorColor,
        iconColor,
        separatorBg,
        separatorBorder,
        separatorFillColor,
        iconFocus,
        iconBgFocus,
        borderFocus,
        iconSize,
        connectorBgsize,
        borderwidth,
        separatorwidth,
        icon,
        headingBottomMargin,
        headingBottomMarginMobile,
        headingBottomMarginTablet,
        stack,
        arrowlinAlignment,
        dateFontSizeMobile,
        dateFontSizeTablet,
        headingFontSizeMobile,
        headingFontSizeTablet,
        contentFontSizeMobile,
        contentFontSizeTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,

        // Z Index
        z_index,
        z_indexMobile,
        z_indexTablet,
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
        blockIsPaddingControlConnected,
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
        blockIsMarginControlConnected,
      },
      setAttributes,
    } = this.props;

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
    // Heading Tag Options
    const headingTagOptions = [
      {
        value: "h1",
        label: __("h1", "responsive-block-editor-addons"),
      },
      {
        value: "h2",
        label: __("h2", "responsive-block-editor-addons"),
      },
      {
        value: "h3",
        label: __("h3", "responsive-block-editor-addons"),
      },
      {
        value: "h4",
        label: __("h4", "responsive-block-editor-addons"),
      },
      {
        value: "h5",
        label: __("h5", "responsive-block-editor-addons"),
      },
      {
        value: "h6",
        label: __("h6", "responsive-block-editor-addons"),
      },
      {
        value: "p",
        label: __("p", "responsive-block-editor-addons"),
      },
      {
        value: "span",
        label: __("span", "responsive-block-editor-addons"),
      },
    ];

    var today = new Date();

    // Update color value
    const onChangeDateColor = (value) => setAttributes({ dateColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeHeadingColor = (value) =>
      setAttributes({ headingColor: value });
    const onChangeContentColor = (value) =>
      setAttributes({ contentColor: value });

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

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
                  let cloneContent = [...timelineItems];
                  let cloneDate = [...t_date];

                  if (cloneContent.length < newCount) {
                    const incAmount = Math.abs(newCount - cloneContent.length);

                    // Save date.
                    {
                      times(incAmount, (n) => {
                        cloneDate.push({
                          title: cloneDate[0].title,
                        });
                      });
                    }

                    setAttributes({ t_date: cloneDate });

                    //Save content
                    {
                      times(incAmount, (n) => {
                        cloneContent.push({
                          time_heading: __("Timeline Heading ", "responsive-block-editor-addons") + newCount,
                          time_desc: __(
                            "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                          ),
                        });
                      });
                    }
                    setAttributes({ timelineItems: cloneContent });
                  } else {
                    const incAmount = Math.abs(newCount - cloneContent.length);
                    let data_new = cloneContent;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ timelineItems: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={100}
                step={1}
              />
              <SelectControl
                label={__("Orientation", "responsive-block-editor-addons")}
                value={timelinAlignment}
                onChange={(value) => setAttributes({ timelinAlignment: value })}
                options={[
                  {
                    value: "left",
                    label: __("Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "right",
                    label: __("Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Arrow Alignment", "responsive-block-editor-addons")}
                value={arrowlinAlignment}
                options={[
                  {
                    value: "top",
                    label: __("Top", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom",
                    label: __("Bottom", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) =>
                  setAttributes({ arrowlinAlignment: value })
                }
              />
              <SelectControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the columns will stack.",
                  "responsive-block-editor-addons"
                )}
              />
            </PanelBody>

            <PanelBody
              title={__("Timeline Item", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                options={headingTagOptions}
                value={headingTag}
                onChange={(value) =>
                  this.props.setAttributes({
                    headingTag: value,
                  })
                }
              />
                <BlockBorderHelperControl
                    attrNameTemplate="item%s"
                    values={{ radius: itemBorderRadius, style: itemBorderStyle, width: itemBorderWidth, color: itemBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                />

              <RangeControl
                label={__("Padding", "responsive-block-editor-addons")}
                value={itemPadding}
                onChange={(value) =>
                  this.props.setAttributes({
                    itemPadding: value !== undefined ? value : 20,
                  })
                }
                min={1}
                max={200}
                step={1}
                allowReset
              />
            </PanelBody>

            <PanelBody
              title={__("Date Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Display Post Date", "responsive-block-editor-addons")}
                checked={displayPostDate}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostDate: !displayPostDate,
                  })
                }
              />
              {displayPostDate && (
                <SelectControl
                  label={__("Date Format", "responsive-block-editor-addons")}
                  value={dateFormat}
                  onChange={(value) => setAttributes({ dateFormat: value })}
                  options={[
                    { value: "M j, Y", label: dateI18n("M j, Y", moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "F j, Y", label: dateI18n("F j, Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "m/d/Y", label: dateI18n("m/d/Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "m-d-Y", label: dateI18n("m-d-Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "m.d.Y", label: dateI18n("m.d.Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "d M Y", label: dateI18n("d M Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "d F Y", label: dateI18n("d F Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "d-m-Y", label: dateI18n("d-m-Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "d.m.Y", label: dateI18n("d.m.Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "d/m/Y", label: dateI18n("d/m/Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "Y-m-d", label: dateI18n("Y-m-d",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "Y.m.d", label: dateI18n("Y.m.d",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "Y/m/d", label: dateI18n("Y/m/d",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "M, Y", label: dateI18n("M, Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "M Y", label: dateI18n("M Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "F, Y", label: dateI18n("F, Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "F Y", label: dateI18n("F Y",  moment( today, 'MM/DD/YYYY' ).format("YYYY-MM-DD")) },
                    { value: "custom", label: __("Normal Text", "responsive-block-editor-addons") },
                  ]}
                />
              )}

              {displayPostDate &&
                times(count, (n) => (
                  <Fragment key={n}>
                    <TextControl
                      label={__("Date", "responsive-block-editor-addons") + " " + (n + 1) + " " + __("Settings", "responsive-block-editor-addons")}
                      value={t_date[n].title}
                      onChange={(value) => {
                        this.saveDate({ title: value }, n);
                      }}
                    />
                  </Fragment>
                ))}

              {displayPostDate && timelinAlignment !== "center" && (
                <RangeControl
                  label={__("Date Bottom Spacing", "responsive-block-editor-addons")}
                  value={dateBottomspace}
                  onChange={(value) =>
                    setAttributes({
                      dateBottomspace: value !== undefined ? value : 5,
                    })
                  }
                  min={0}
                  max={50}
                  allowReset
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title={__("Connector", "responsive-block-editor-addons")} initialOpen={false}>
              <FontIconPicker {...icon_props} />

              <RangeControl
                label={__("Icon Size", "responsive-block-editor-addons")}
                value={iconSize}
                onChange={(value) =>
                  setAttributes({ iconSize: value !== undefined ? value : 20 })
                }
                min={0}
                max={30}
                allowReset
              />
              <RangeControl
                label={__("Icon Background Size", "responsive-block-editor-addons")}
                value={connectorBgsize}
                onChange={(value) =>
                  setAttributes({
                    connectorBgsize: value !== undefined ? value : 35,
                  })
                }
                min={25}
                max={90}
                allowReset
              />
              <RangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={borderwidth}
                onChange={(value) =>
                  setAttributes({
                    borderwidth: value !== undefined ? value : 0,
                  })
                }
                min={1}
                max={10}
                allowReset
              />
              <RangeControl
                label={__("Connector Width", "responsive-block-editor-addons")}
                value={separatorwidth}
                onChange={(value) =>
                  setAttributes({
                    separatorwidth: value !== undefined ? value : 3,
                  })
                }
                min={1}
                max={10}
                allowReset
              />
              <PanelBody
                title={__("Connector Color Settings", "responsive-block-editor-addons")}
                initialOpen={true}
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
                      name: "focus",
                      title: __("Focus", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("focus" === tabName.name) {
                      tabout = (
                        <PanelColorSettings
                          title={__("Color Settings", "responsive-block-editor-addons")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: separatorFillColor,
                              onChange: (colorValue) =>
                                setAttributes({
                                  separatorFillColor: colorValue,
                                }),
                              label: __("Line Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: iconFocus,
                              onChange: (colorValue) =>
                                setAttributes({ iconFocus: colorValue }),
                              label: __("Icon Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: iconBgFocus,
                              onChange: (colorValue) =>
                                setAttributes({ iconBgFocus: colorValue }),
                              label: __("Background Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: borderFocus,
                              onChange: (colorValue) =>
                                setAttributes({ borderFocus: colorValue }),
                              label: __("Border Color", "responsive-block-editor-addons"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    } else {
                      tabout = (
                        <PanelColorSettings
                          title={__("Color Settings", "responsive-block-editor-addons")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: separatorColor,
                              onChange: (colorValue) =>
                                setAttributes({ separatorColor: colorValue }),
                              label: __("Line Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: iconColor,
                              onChange: (colorValue) =>
                                setAttributes({ iconColor: colorValue }),
                              label: __("Icon Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: separatorBg,
                              onChange: (colorValue) =>
                                setAttributes({ separatorBg: colorValue }),
                              label: __("Background Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: separatorBorder,
                              onChange: (colorValue) =>
                                setAttributes({ separatorBorder: colorValue }),
                              label: __("Border Color", "responsive-block-editor-addons"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            </PanelBody>

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<TypographyHelperControl
					title={__("Date Typography", "responsive-block-editor-addons")}
					attrNameTemplate="date%s"
					values={{
					family: dateFontFamily,
					size: dateFontSize,
					sizeMobile: dateFontSizeMobile,
					sizeTablet: dateFontSizeTablet,
					weight: dateFontWeight,
					height: dateLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Heading Typography", "responsive-block-editor-addons")}
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
				<TypographyHelperControl
					title={__("Content Typography", "responsive-block-editor-addons")}
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
            </PanelBody>
            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: backgroundColor,
                  onChange: onChangeBackgroundColor,
                  label: __(
                    "Background Color",
                    "responsive-block-editor-addons"
                  ),
                },
                {
                  value: headingColor,
                  onChange: onChangeHeadingColor,
                  label: __("Heading Color", "responsive-block-editor-addons"),
                },
                {
                  value: contentColor,
                  onChange: onChangeContentColor,
                  label: __("Content Color", "responsive-block-editor-addons"),
                },
                {
                  value: dateColor,
                  onChange: onChangeDateColor,
                  label: __("Date Color", "responsive-block-editor-addons"),
                },
              ]}
            >
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 100 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelColorSettings>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
              <ResponsiveSpacingControl
                title={"Horizontal Spacing"}
                attrNameTemplate="horizontalSpace%s"
                values={{
                  desktop: horizontalSpace,
                  tablet: horizontalSpaceTablet,
                  mobile: horizontalSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Vertical Spacing"}
                attrNameTemplate="verticalSpace%s"
                values={{
                  desktop: verticalSpace,
                  tablet: verticalSpaceTablet,
                  mobile: verticalSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Heading Bottom Margin"}
                attrNameTemplate="headingBottomMargin%s"
                values={{
                  desktop: headingBottomMargin,
                  tablet: headingBottomMarginTablet,
                  mobile: headingBottomMarginMobile,
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
