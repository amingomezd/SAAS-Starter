import {Users, Roles, Todos, Invites, Organizations} from './models.js'

export const seed = async () => {
    const user = new Users({
        _id: '5f9f1b9b9c9d440000a1b1b1',
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        firebase_user_id: '12345678'
    });

    user.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('User saved successfully');
        }
    });

    const role = new Roles({
        role: 'admin',
        org_id: '63b8a7619e15dd678de03862',
        user_id: '5f9f1b9b9c9d440000a1b1b1'
    });

    role.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Role saved successfully');
        }
    });

    const todo = new Todos({
        title: 'Finish project',
        description: 'Finish the project by Friday',
        author: 'JohnDoe',
        org_id: '63b8a7619e15dd678de03862'
    });

    todo.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Todo saved successfully');
        }
    });

    const invite = new Invites({
        org_id: '63b8a7619e15dd678de03862',
        verify_key: '12345678',
        recipient_email: 'jane@example.com',
        sender_email: 'johndoe@example.com'
    });

    invite.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Invite saved successfully');
        }
    });

    const org = new Organizations({
        _id: '63b8a7619e15dd678de03862',
        org_name: 'Acme Inc.',
        primary_email: 'info@acme.com',
        stripe_customer_id: '12345678',
        subscription_id: '12345678',
        plan_type: 'basic'
    });

    org.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Organization saved successfully');
        }
    });
}

// Repeat this process for each of your collections
