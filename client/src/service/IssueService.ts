import APIService from "./APIService";

class IssueService extends APIService {
  constructor() {
    super();
    this.setPath("/issues"); 
  }

  async getUserData(userId: string) {
    return this.get<{ name: string; age: number }>({ params: { userId } });
  }
}

export default IssueService;