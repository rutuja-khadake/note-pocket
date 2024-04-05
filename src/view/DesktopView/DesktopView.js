import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/homeDesktop/DesktopHome";
import DesktopNotes from "../../components/notesDesktop/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";
import DesktopNotesContent from "../../components/notesContentDesktop/DesktopNotesContent";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
      
      <div/>
    </div>
  );
}

export default DesktopView;