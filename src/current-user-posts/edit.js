/**
 * Block edit view for the Current User Posts Query block.
 *
 * This component renders a query loop block with attributes scoped
 * to the currently logged-in user. It uses WordPress data and block
 * editor hooks to dynamically configure block attributes and content.
 *
 * @author Sagiris Web Development
 * @since 0.1.0
 * @file Block edit view for the Current User Posts Query block.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */

/** jshint {inline configuration here} */

/**
 * React hooks and components for working with block editor UI.
 *
 * - `useBlockProps`: Adds block-specific props like className.
 * - `InnerBlocks`: Allows nesting child blocks (like `core/query`).
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { VARIATION_NAMESPACE, DEFAULT_QUERY } from "./constants";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @function Edit
 * @memberof sagiriswd.currentUserPosts
 *
 * @param {Object} props - The props passed to the block edit function.
 * @param {Object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @returns {JSX.Element} The element rendered in the block editor.
 */
export default function Edit( { attributes, setAttributes } ) {
	
	const blockProps = useBlockProps();

	/**
	 * Retrieve the current user object from the WordPress store.
	 * @type {Object} currentUser
	 */
	const currentUser = useSelect( select => {
		return select( "core" ).getCurrentUser();
	});

	/**
	 * Template used to render the `core/query` block scoped to the current user.
	 * @type {Array}
	 */
	const template = [
		[ "core/query", {
			namespace: VARIATION_NAMESPACE,
			query: { ...DEFAULT_QUERY, author: currentUser?.id ?? 0 },
		} ]
	];

	//Set the block attribute
	useEffect( () => {
		setAttributes( { ...attributes, currentUserId: currentUser.id } );
	}, [ attributes, currentUser, setAttributes ] );

	return (
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={[ "core/query" ]}
					template={ template }
				/>
			</div>
	);
}
