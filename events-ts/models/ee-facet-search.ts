/* tslint:disable */
export interface EeFacetSearch {
  facetHits?: Array<{value?: string, highlighted?: string, count?: number}>;
  exhaustiveFacetsCount?: boolean;
  processingTimeMS?: number;
}
