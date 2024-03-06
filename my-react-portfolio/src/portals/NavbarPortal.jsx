// portal.jsx
import { useState, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarModal = lazy(() => import('../modals/NavbarModal'));

export default function Portal() {
  const [isShowNavbarModal, setShowNavbarModal] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        onClick={() => setShowNavbarModal(true)}
        className="font-awesome-icon cursor-pointer hover:scale-125 p-2 text-4xl text-rose-bg"
        icon={faBars}
      />
      {isShowNavbarModal && (
        <Suspense fallback={<i className="fa-regular fa-spinner fa-spin"></i>}>
          {createPortal(
            <NavbarModal onClose={() => setShowNavbarModal(false)} />,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}
