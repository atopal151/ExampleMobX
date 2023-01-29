import { observable, makeObservable, action, runInAction } from 'mobx'
import axios from 'axios';
import { Alert } from 'react-native';

class UserStore {
    users = [];
    loading = false;
    error = '';

    constructor() {
        makeObservable(this, {
            loading: observable,
            error: observable,
            users: observable,
            fetchUsers: action.bound
        })
    }

    //*async/await methot
    async fetchUsers() {
        this.loading = true;
        this.users = [];
        this.error = '';
        try {
            const { data: { results } } =
                await axios.get('https://randomuser.me/api/?results=10')
            runInAction(() => {
                this.users = results;
                this.loading = false;
            })
        } catch (error) {
            runInAction(() => {
                this.loading = false;
                this.error = 'Error retrieving information from server.';
            })

        }
    }


    /*
    //*catch block async actions
    async fetchUsers ()  {
        axios.get('https://randomuser.me/api/?results=10')
            .then(response => response.data.results)
            .then(users => {
                runInAction(() => {
                    this.users = users;
                })
            }, ).catch(error => {
                Alert.alert('error')
            })
    }*/
    /*
    //*inline methot
      fetchUsers() {
            axios.get('https://randomuser.me/api/?results=10')
            .then(response => response.data.results)
            .then(this.fetchUserSuccess,this.fetchUsersError)
        }
    
        fetchUserSuccess (users){
            this.users=users;
        }
        fetchUsersError (){
            Alert.alert('error')
        }*/

}

export default new UserStore();