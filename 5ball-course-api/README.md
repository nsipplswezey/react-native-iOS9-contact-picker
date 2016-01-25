# A Nodal Application

## GET
/v1/tee_times
Array of Objects ex.
{
  "data": [
    {
      "id": 1,
      "username": "goldengate",
      "email": "admin@goldengate.com",
      "created_at": "2016-01-20T08:52:01.499Z"
    },
    {
      "id": 2,
      "username": "tpcharding",
      "email": "admin@tpcharding.com",
      "created_at": "2016-01-20T08:52:13.952Z"
    }
  ]
}

/v1/users
Array of Object of the form
    {
      "id": 1,
      "user_id": 1,
      "teetime": "2016-02-14T20:12:00.000Z",
      "created_at": "2016-01-20T08:53:16.402Z",
      "user": {
        "id": 1,
        "username": "goldengate",
        "created_at": "2016-01-20T08:52:01.499Z"
      }
    }

## POST
/v1/tee_times
Takes x-www-form-urlencoded with two fields
user_id : [int] 
teetime: [UTC date]

ex.
user_id : 2
teetime: 2016-02-14T20:12:54.000Z


/v1/users
Takes x-www-form-urlencoded with two fields
username : [string]
email : [string]
password : [string]

ex.
username : tpcharding
email : admin@tpcharding.com
password : tpcharding1


## Running Locally, with locally installed nodal

```sh
npm run nodal -- s
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


