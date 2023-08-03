export const LoginSection = ({ setIsLogin }) => {

    const upDate = () => {
        setIsLogin(true)
    }

    return(
        <>
            <button onClick={upDate} type="submit">Login</button>
        </>
    )
}