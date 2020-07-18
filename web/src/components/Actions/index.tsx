import React from 'react';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, ActionsPanel, ActionList, Action } from './styles';

interface ActionsProps extends RouteComponentProps {
  id: number;
  handleView?: (id: number) => void;
  handleDelete: (id: number) => void;
  edit: boolean;
  path: string;
  exclude: boolean;
  cancel?: boolean;
}

const Actions: React.FC<ActionsProps> = ({
  id,
  handleView,
  handleDelete,
  edit,
  path,
  exclude,
  cancel,
}: ActionsProps) => {
  return (
    <Container>
      <ActionsPanel>
        <ActionList>
          {handleView && (
            <Action>
              <button type="button" onClick={() => handleView(id)}>
                <MdVisibility size={16} color="#8E5BE8" />
                <p>Visualizar</p>
              </button>
            </Action>
          )}

          <hr />
          {edit && (
            <Action>
              <Link
                to={{
                  pathname: `${path}/${id}`,
                }}
              >
                <MdCreate size={16} color="#4D85EE" />
                <p>Editar</p>
              </Link>
            </Action>
          )}
          <hr />
          {exclude && (
            <Action>
              <button type="button" onClick={() => handleDelete(id)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <p>Excluir</p>
              </button>
            </Action>
          )}
          {cancel && (
            <Action>
              <button type="button" onClick={() => handleDelete(id)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <p>Cancelar encomenda</p>
              </button>
            </Action>
          )}
          <hr />
        </ActionList>
      </ActionsPanel>
    </Container>
  );
};

export default withRouter(Actions);
