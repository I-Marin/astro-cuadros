export interface Image {
    data: {
        id: number,
        attributes: {
            name: string,
            alternativeText?: string,
            formats: {
                thumbnail: {
                    name: string,
                    url: string,
                },
                medium: {
                    name: string,
                    url: string,
                },
                small: {
                    name: string,
                    url: string,
                },
                large: {
                    name: string,
                    url: string,
                }
            },
            url: string,
        }
    }
}