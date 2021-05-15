import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={props.product.image_path} className="product-image" alt={props.product.name} />
        <Typography variant="h5" component="h2">
          {props.product.ticker}
        </Typography>
        <Typography variant="h5" component="h2">
          ${props.price}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
