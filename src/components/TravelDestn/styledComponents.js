import styled from 'styled-components'

export const TravelPackageListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  list-style-type: none;
  width: 40%;
  margin-right: 25px;
  margin-bottom: 25px;
  border: 1px solid #cbd5e1; /* subtle border */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); /* soft depth */
`

export const TravelPackageImage = styled.img``

export const TravelInfoContainer = styled.div`
  padding: 18px;
`

export const TravelPackageName = styled.h1`
  font-family: 'Roboto';
  font-weight: 550;
  font-size: 22px;
  color: #475569;
`

export const TravelPackageInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
`
