export class SearchItem {
} 
userDetail : any
  name!: string;
  bio!: string;
  followers! : number;
  location! : string;
  
  let findData = (data : any = const [userDetail:any; bio:string]) => {
    this.userDetail = data;
    this.bio = this.userDetail.bio;
    this.followers = this.userDetail.followers;
    this.location = this userDetail.location
    this.name = this userDetail.name;
  }