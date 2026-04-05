// This file holds types that are shared across the entire app,
// not specific to any one feature.

// This is the type for the response we get from the API when we fetch single buys
export type PaginatedResponse<T> = {
    // The <T> means this is a generic type, we can specify what type of results we want when we use it
    results: T[];
    next: string | null;
    previous: string | null;
};