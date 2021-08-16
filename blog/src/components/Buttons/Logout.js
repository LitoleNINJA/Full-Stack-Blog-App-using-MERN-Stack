import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {

    const { logout } = useAuth0();

    return (
        <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={() => logout({ returnTo: window.location.origin })}>Log Out
        </Button>
    )
}
