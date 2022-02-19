// Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormComponent from '../../components/form/form'

export default function AddUserPage () {

    return (
      <div className="add-user-page">
        <Card>
          <CardContent>
            <CardHeader
              title="Form"
            />
            <FormComponent />
          </CardContent>
        </Card>
      </div>
    );
}