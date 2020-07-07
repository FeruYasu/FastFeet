import React from 'react';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, ActionsPanel, ActionList, Action } from './styles';

interface ActionsProps extends RouteComponentProps {
  id: number;
  handleview: any;
  handledelete: any;
  view: any;
  edit: any;
  path: string;
  exclude: any;
  cancel?: any;
  title: string;
}

const Actions: React.FC<ActionsProps> = ({
  id,
  handleview,
  handledelete,
  view,
  edit,
  path,
  exclude,
  cancel,
}: ActionsProps) => {
  return (
    <Container>
      <ActionsPanel>
        <ActionList>
          {view && (
            <Action>
              <button type="button" onClick={() => handleview(id)}>
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
              <button type="button" onClick={() => handledelete(id)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <p>Excluir</p>
              </button>
            </Action>
          )}
          {cancel && (
            <Action>
              <button type="button" onClick={() => handledelete(id)}>
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
