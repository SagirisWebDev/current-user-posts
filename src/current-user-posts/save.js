/**
 * Client-side save function
 * 
 * React hook that is used to mark the block wrapper element. It provides all the necessary props like the class name.
 *
 * @since 0.1.0
 * @author Sagiris Web Development
 * @file Client-side save function
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#innerblocks
 * @module sagiriswd-current-user-posts/save
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
  return (
    <div { ...useBlockProps.save() }>
      <InnerBlocks.Content />
    </div>
  );
}