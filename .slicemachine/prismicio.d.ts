// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Type field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    type: prismicT.KeyTextField;
    /**
     * Project Online field in *Project*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: project.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Repositorio field in *Project*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: project.repositorio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    repositorio: prismicT.LinkField;
    /**
     * Thumbnail field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
export type AllDocumentTypes = ProjectDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ProjectDocumentData, ProjectDocument, AllDocumentTypes };
    }
}