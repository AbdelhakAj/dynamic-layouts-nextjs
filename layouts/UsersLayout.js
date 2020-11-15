import SideBar from "../components/SideBar";

const usersLayout = ({ children }) => (
  <div className="users-container">
    <div className="users-sidebar">
      <SideBar />
    </div>
    
    <div className="users-content">
        {children}
    </div>

    <style jsx global>{`
        .users-container {
            display: flex
        }
        .users-sidebar, .users-content {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 16px;
            margin: 16px;
        }
        .users-sidebar {
            width: 20%;
        }
        .users-content {
            width: 80%;
        }
    `}</style>

  </div>
);

export default usersLayout;