import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Box from '../../components/framework/Box';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
const DropZone = styled.div`
  .dropzone {
    min-width: 380px;
    border: 1px dashed #a5b9c8;
    background: #f9fafd;
    box-shadow: 0 0 0 8px #f9f9f9;
    border-radius: 10px;
    margin: 8px;
    padding-top: 16px;
    margin-top: 30px;
    @media (max-width: 500px) {
      min-width: 200px;
    }
    .fa {
      color: #00b2e2;
      font-size: 50px;
    }
    .browse {
      color: #00b2e2;
      text-decoration: underline;
      font-size: 1.2rem;
    }
  }
  .files-list {
    li {
      &:nth-child(odd) {
        background: #f9fafd;
      }
    }
  }
  .file {
    img {
      width: 20px;
    }
    .fa-check {
      background: #e8f5f2;
      color: #2fc9a9;
      padding: 6px;
      border-radius: 50%;
      margin: ${(props) => (props.lang == 'en' ? '0 0 0 auto' : '0 auto 0 0 ')};
    }
    a {
      margin: ${(props) => (props.lang == 'en' ? '0 0 0 auto' : '0 auto 0 0 ')};
    }
  }
`;
function ContractAmendment() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, application/pdf',
  });
  const [uploaded, setUploaded] = useState([]);
  const templates = [
    {
      name: 'lorem ipsum',
      url: 'http://example',
    },
    {
      name: 'lorem lorem ipsum ipsum',
      url: 'http://example',
    },
    {
      name: 'lorem ipsum',
      url: 'http://example',
    },
    {
      name: 'lorem lorem ipsum ipsumipsum',
      url: 'http://example',
    },
  ];
  useEffect(() => {
    let filterAcceptedFiles = acceptedFiles;
    // check if the file already exists
    if (uploaded.length > 0 && acceptedFiles.length > 0) {
      filterAcceptedFiles = [];
      acceptedFiles.forEach((accept) => {
        !uploaded.some((item) => item.path === accept.path)
          ? filterAcceptedFiles.push(accept)
          : null;
      });
    }
    setUploaded([...uploaded, ...filterAcceptedFiles]);
  }, [acceptedFiles]);
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <div className="p-4">
        <hr />
        <Row className="justify-content-center">
          <Box
            className="m-3 text-center d-flex flex-column pt-5 w-35"
            title={t('Services.uploadDocuments')}
          >
            <DropZone lang={i18n.language}>
              <ul className="list-unstyled text-left files-list p-0 pt-3">
                {uploaded.map((file) => (
                  <li className="d-flex file align-items-center px-2 py-3" key={file.path}>
                    <div>
                      <img src="icons/pdf.jpg" alt="" />
                    </div>
                    <p className="mx-3 my-0">{file.path}</p>
                    <i className="fa fa-check"></i>
                  </li>
                ))}
              </ul>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <i className="fa fa-cloud-upload"></i>
                <p className="mb-1">{t('Drag files here or')}</p>
                <p className="browse">{t('Browse')}</p>
              </div>
            </DropZone>
            <div className="mt-auto">
              <Button variant="primary">{t('Services.send')}</Button>
            </div>
          </Box>
          <Box
            className="m-3 text-center d-flex flex-column pt-5 w-35"
            title={t('Services.downloadTemplates')}
          >
            <DropZone>
              <ul className="list-unstyled text-left files-list p-0 pt-3">
                {templates.map((file, index) => (
                  <li className="d-flex file align-items-center px-2 py-3" key={index}>
                    <div>
                      <img src="icons/pdf.jpg" alt="" />
                    </div>
                    <p className="mx-3 my-0">{file.name}</p>
                    <a href={file.url} target="_blank" rel="noreferrer">
                      <i className="fa fa-download"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </DropZone>
            <div className="mt-auto">
              <Button variant="primary">{t('Services.downloadAllFiles')}</Button>
            </div>
          </Box>
        </Row>
      </div>
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(ContractAmendment);
