/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const { PanelBody, RangeControl, ToggleControl, SelectControl, TabPanel, Dashicon } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  render() {
    // Setup the attributes
    const {
      attributes: {
        spacerHeight,
        spacerHeightMobile,
        spacerHeightTablet,
        spacerDivider,
        spacerDividerStyle,
        spacerDividerColor,
        spacerDividerHeight,
        spacerDividerWidth,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
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
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
        blockNewSpacingValuesUpdated,
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
      marginTop: 5,
      marginRight: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginTabletTop: 5,
      marginTabletRight: 5,
      marginTabletBottom: 5,
      marginTabletLeft: 5,
      marginMobileTop: 5,
      marginMobileRight: 5,
      marginMobileBottom: 5,
      marginMobileLeft: 5,
    }

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!blockNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopMargin:          spacerHeight !== undefined ? spacerHeight : blockTopMargin,
          blockRightMargin:        spacerHeight !== undefined ? spacerHeight : blockRightMargin,
          blockBottomMargin:       spacerHeight !== undefined ? spacerHeight : blockBottomMargin,
          blockLeftMargin:         spacerHeight !== undefined ? spacerHeight : blockLeftMargin,
          blockTopMarginTablet:    spacerHeightTablet !== undefined ? spacerHeightTablet : blockTopMarginTablet,
          blockRightMarginTablet:  spacerHeightTablet !== undefined ? spacerHeightTablet : blockRightMarginTablet,
          blockBottomMarginTablet: spacerHeightTablet !== undefined ? spacerHeightTablet : blockBottomMarginTablet,
          blockLeftMarginTablet:   spacerHeightTablet !== undefined ? spacerHeightTablet : blockLeftMarginTablet,
          blockTopMarginMobile:    spacerHeightMobile !== undefined ? spacerHeightMobile : blockTopMarginMobile,
          blockRightMarginMobile:  spacerHeightMobile !== undefined ? spacerHeightMobile : blockRightMarginMobile,
          blockBottomMarginMobile: spacerHeightMobile !== undefined ? spacerHeightMobile : blockBottomMarginMobile,
          blockLeftMarginMobile:   spacerHeightMobile !== undefined ? spacerHeightMobile : blockLeftMarginMobile,
        }
      )
    }
    this.props.setAttributes({blockNewSpacingValuesUpdated: true});

    // Button size values
    const spacerStyleOptions = [
      {
        value: "bars",
        label: __("Bar", "responsive-block-editor-addons"),
      },
      {
        value: "dots",
        label: __("Dots", "responsive-block-editor-addons"),
      },
      {
        value: "asterisks",
        label: __("Asterisks", "responsive-block-editor-addons"),
      },
      {
        value: "basic",
        label: __("Basic", "responsive-block-editor-addons"),
      },
    ];

    // Divider color
    const dividerColor = [
      { color: "#ddd", name: "white" },
      { color: "#333", name: "black" },
      { color: "#3373dc", name: "royal blue" },
      { color: "#22d25f", name: "green" },
      { color: "#ffdd57", name: "yellow" },
      { color: "#ff3860", name: "pink" },
      { color: "#7941b6", name: "purple" },
    ];

    // Update color values
    const onChangeDividerColor = (value) =>
      setAttributes({ spacerDividerColor: value });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <SelectControl
                label={__("Divider Style", "responsive-block-editor-addons")}
                value={spacerDividerStyle}
                options={spacerStyleOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                  this.props.setAttributes({
                    spacerDividerStyle: value,
                  });
                }}
              />
              <RangeControl
                label={__("Divider Height", "responsive-block-editor-addons")}
                value={spacerDividerHeight || ""}
                onChange={(value) =>
                  this.props.setAttributes({
                    spacerDividerHeight: value,
                  })
                }
                min={1}
                max={100}
              />
              <RangeControl
                label={__("Divider Width", "responsive-block-editor-addons")}
                value={spacerDividerWidth || ""}
                onChange={(value) =>
                  this.props.setAttributes({
                    spacerDividerWidth: value,
                  })
                }
                min={0}
                max={100}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelColorSettings
              title={__("Divider Color", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  colors: dividerColor,
                  value: spacerDividerColor,
                  onChange: onChangeDividerColor,
                  label: __("Divider Color", "responsive-block-editor-addons"),
                },
              ]}
            ></PanelColorSettings>
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
