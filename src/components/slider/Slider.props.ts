export interface ISlideData {
    id: string;
    name: string;
    jobPosition: string;
    text: string;
    image: string;
}

export interface ISliderProps {
    sliderData: ISlideData[];
}
