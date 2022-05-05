function Login() {
    const submit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/Login', {
            method: "POST",
            body: JSON.stringify(
                Object.fromEntries(formData)
            ),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit"> Submit </button>
        </form>
    );
}

export default Login;