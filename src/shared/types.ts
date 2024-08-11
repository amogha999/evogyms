export enum SelectedPage{
    Home='home',
    Benefits='benefits',
    OurClasses='ourclases',
    contactus='contactus'
  }

  export interface BenefitType{
    icon:JSX.Element;
    title:string;
    description:string
  }

  export interface ClassType{
    name: string;
    description?: string;
    image: string;
  }