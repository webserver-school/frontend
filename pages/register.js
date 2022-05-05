function Register() {
    const submit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/Register', {
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
            <input type="password" name="confirm_password" placeholder="Confirm Password" required />
            <button type="submit"> Submit </button>
        </form>
    );
}

export default Register;