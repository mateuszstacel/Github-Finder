console.log('user')
class GitHub {
    constructor() {
        this.client_id = 'f9117242da286e6f1f60';
        this.client_secret = '9f6564ccf0326f7042734f98925365f1f9976909';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


       const profile = await profileResponse.json();

       const repos = await reposResponse.json();

       return {
           profile: profile,
           repos: repos
        }

    }

 

}