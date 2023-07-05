import React, { useState } from 'react';
import * as P from './styles';
import apiPartner from '../../api/partner';

const Partner: React.FC = () => {

  const initialFormData = {
    name: '',
    email: '',
    message: '',
    socialMedia: {
      twitch: false,
      youtube: false,
      facebook: false,
      twitter: false,
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: { target: { name: any; checked: any; }; }) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      socialMedia: {
        ...prevState.socialMedia,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await apiPartner.post('/partner', formData);
      alert('Mensagem enviada com sucesso!');
      setFormData(initialFormData);
    } catch (error) {
      alert('Ocorreu um problema ao enviar sua mensagem.')
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (

    <P.FormContainer>
      <P.Title>FORMULÁRIO RACCOON PARTNERS</P.Title>
      <form onSubmit={handleSubmit}>
        <P.FormGroup>
          <P.Label htmlFor="name">Nome:</P.Label>
          <P.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </P.FormGroup>
        <P.FormGroup>
          <P.Label htmlFor="email">Email:</P.Label>
          <P.Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </P.FormGroup>
        <P.FormGroup>
          <P.Label htmlFor="message">Mensagem:</P.Label>
          <P.TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </P.FormGroup>
        <P.FormGroup>
          <P.Label>Redes Sociais:</P.Label>
          <P.CheckboxGroup>
            <P.CheckboxLabel>
              <input
                type="checkbox"
                name="twitch"
                checked={formData.socialMedia.twitch}
                onChange={handleCheckboxChange}
              />{' '}
              Twitch
            </P.CheckboxLabel>
            <P.CheckboxLabel>
              <input
                type="checkbox"
                name="youtube"
                checked={formData.socialMedia.youtube}
                onChange={handleCheckboxChange}
              />{' '}
              Youtube
            </P.CheckboxLabel>
            <P.CheckboxLabel>
              <input
                type="checkbox"
                name="facebook"
                checked={formData.socialMedia.facebook}
                onChange={handleCheckboxChange}
              />{' '}
              Facebook
            </P.CheckboxLabel>
            <P.CheckboxLabel>
              <input
                type="checkbox"
                name="twitter"
                checked={formData.socialMedia.twitter}
                onChange={handleCheckboxChange}
              />{' '}
              Twitter
            </P.CheckboxLabel>
          </P.CheckboxGroup>
        </P.FormGroup>
        <P.SubmitButton type="submit">Enviar</P.SubmitButton>
      </form>
    </P.FormContainer>

  );

};

export default Partner;