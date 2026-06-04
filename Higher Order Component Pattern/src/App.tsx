import './App.css'
import {withUserDataAndPermissions as withPermission} from './components/withUserDataAndPermissions'
import AdminPanel from './components/AdminPanel'
import ReportsPage from './components/ReportsPage'
import ProfilePage from './components/ProfilePage'

const AdminPanelWithPermission = withPermission(AdminPanel, ['admin'])
const ReportsPageWithPermission = withPermission(ReportsPage, ['any'], ['report'])
const ProfilePageWithPermission = withPermission(ProfilePage)

function App() {

  return (
    <>
      <AdminPanelWithPermission />
      <ReportsPageWithPermission />
      <ProfilePageWithPermission />
    </>
  )
}

export default App
