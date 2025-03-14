import Nav from './Nav'

export default function Login() {
    return (
        <>
            <Nav />
            <h1 style={{ textAlign: 'center', color: 'brown' }}> Login to your account to place orders!</h1>
            <fieldset className='fieldset-container'><h3>Login</h3>
                <form className='form-container'>
                    <label>Name:
                        <input type='text' />
                    </label><br />
                    <label>Email:
                        <input type='text' />
                    </label><br />
                    <label>Password:
                        <input type='text' />
                    </label><br />
                    <button>Login</button>
                </form>
            </fieldset>
            <h2 style={{ textAlign: 'center' }}>Do not have account?Signup <a href=''>HERE</a></h2>

        </>
    )
}