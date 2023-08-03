export const RestrictedSection = ({ setIsLogin }) => {

    const upDate = () => {
        setIsLogin(false)
    }

    return(
        <>
            <p>Welcome</p>

            <button onClick={upDate}>Logout</button>
        </>
    )
}