/**
 * BLOCK: Responsive Blocks Advanced Heading
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/form-input", {
  title: __("Form Input", "responsive-block-editor-addons"),
  description: __(
    "Display a contact form for your clients.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.formInput,
  category: "responsive_block_editor_addons",
  parent: ["responsive-block-editor-addons/form"],
  keywords: [
    __("form", "responsive-block-editor-addons"),
    __("input", "responsive-block-editor-addons"),
    __("business", "responsive-block-editor-addons"),
    __("email", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes,

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
