interface User {
    username: string,
    password: string,
    email?: string,
    token?: string
}

export function loginForm():HTMLFormElement {
    const userForm = document.createElement('form');
    
    const [usernameLabel, usernameInput] = [                 
        document.createElement('label'),
        document.createElement('input')
    ]
    usernameLabel.textContent = 'Username: ';
    usernameInput.type = 'text';

    const [passwordLabel, passwordInput] = [                 
        document.createElement('label'),
        document.createElement('input')
    ]
    passwordLabel.textContent = 'Password: ';
    passwordInput.type = 'text';

    const submitButton = document.createElement('button')
    submitButton.textContent = 'log in'

    userForm.append(
        usernameLabel,
        document.createElement('br'),
        usernameInput,
        document.createElement('br'),
        passwordLabel,
        document.createElement('br'),
        passwordInput,
        document.createElement('br'),
        submitButton
    )

    userForm.addEventListener('submit', async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();
        const user: User = {
            username: usernameInput.value,
            password: passwordInput.value
        }
        console.table(user);
        await handleUserData(user)
    })

    return userForm
}

async function handleUserData(user: User):Promise<User> {
    const res = await fetch('https://matrix-fakebook-123.onrender.com/api/sign-in',
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password,
        })
    });
    if(res.ok){
        console.log("hooray");
    }
    const data = await res.json();
    console.log(data);
    return data
}