import { useAuthContext } from "../../context/AuthContext"


export default function DashboardPage() {
    const {user} = useAuthContext()
    console.log(user)
    return <div>Dashboard here user: {JSON.stringify(user.name)}</div>
}