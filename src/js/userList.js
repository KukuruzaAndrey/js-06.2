import _ from 'lodash';
import * as url from '../img/userAvatar.gif';

//  some comment
class UserList {
    constructor(users) {
        this.sortedUsers = _.sortBy(users, 'age');
    }

    showList() {
        const container = document.getElementById('root');
        this.sortedUsers.forEach((user) => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            img.src = url.default;
            p.append(`${user.name} ${user.age}`);
            div.appendChild(img);
            div.appendChild(p);
            container.appendChild(div);
        });
    }
}

export default UserList;
