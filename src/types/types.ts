export type PageTemplateProps = {
  heading: string;
  body: string;
};

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type Galery = {
  height: number;
  width: number;
  url: string;
};

export type PlaceTemplateProps = {
  place: {
    id: string;
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
