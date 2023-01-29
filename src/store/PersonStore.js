import { observable, makeObservable, action, computed, runInAction } from 'mobx'

class PersonStore {
    fistName = "none";
    surname = "none";

    constructor() {
        makeObservable(this, {
            fistName: observable,
            surname: observable,
            changeName: action.bound,
            fullName: computed
        })
    }

    changeName() {
        setTimeout(() => {
            runInAction(() => {
                this.fistName = "Alaettin";
                this.surname = "Topal";
            })
        }, 2000)
    }
    get fullName() {
        return `${this.fistName} dd ${this.surname}`
    }

}

export default new PersonStore();