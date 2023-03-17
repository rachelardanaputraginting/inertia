import React from 'react'
import App from '../../Layouts/App';

export default function IndexPost(props) {
    const { data: posts, from } = props.posts;
    return (
        <div className='container'>
            <div className="card shadow mt-4">
                <div className="card-header">Posts</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Body</th>
                                <th className='text-end'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={index}>
                                    <td key={post}>{from + index}</td>
                                    <td>{post.title}</td>
                                    <td>{post.slug}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {/* <li><button className="dropdown-item" onClick={() => openEditDialog(user)}>Edit</button></li> */}
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                <li><a className="dropdown-item" href="#">View</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* <Pagination links={links} /> */}

                </div>
            </div>
        </div>
    )
}

IndexPost.layout = (page) => <App children={page} title="Posts" />
