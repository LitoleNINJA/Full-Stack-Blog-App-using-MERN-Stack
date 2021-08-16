import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";

export default function Login(props) {

    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            variant='contained'
            color={props.color}
            size={props.size}
            onClick={loginWithRedirect}>Log In
        </Button>
    )
}
