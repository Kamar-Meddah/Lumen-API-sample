import PostInterface from '@/Models/PostInterface';

export const SetAbstract = (values: PostInterface[]) => {
    values.map((value) => {
        value.content = '<p>' + value.content + '   <b>....</b></p>' ;
    });
    return values;
};
