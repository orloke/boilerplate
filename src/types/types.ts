export type PageTemplateProps = {
  heading: string;
  body: string;
};

export type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type Galery = {
  url: string;
};

export type PlaceTemplateProps = {
  place: {
    name: string;
    slug: string;
    description: {
      html: string;
      text: string;
    };
    galery: Galery[];
  };
};

export type MapProps = {
  places: Place[];
};
