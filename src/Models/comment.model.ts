import CommentInterface from '@/Models/CommentInterface';
import UserInterface from '@/Models/UserInterface';
import UserModel from '@/Models/user.model';

export default class CommentModel implements CommentInterface {

    // public id: number;
    public content: string;
    public user_id: number;
    public post_id: number;
    public id: number;
    public updated_at: string;
    public user: UserInterface;

    public constructor(content: string, post_id: number, user_id: number, username: string = '', id: number = 0) {
        this.content = content;
        this.post_id = post_id;
        this.user_id = user_id;
        this.id = id;
        this.user = new UserModel(username, '', '', user_id);
        this.updated_at = new Date().toLocaleString();
    }

}
