import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import Button from 'react-bootstrap/Button';



function Portfolio() {

return(
    <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>Projects</h1>
            <hr/>
            <div>
                <h3>Coding Bootcamp Projects</h3>
                <div className='bootProjs '>
                <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>Weather App</h5>
                        <p className='prjDesc d-flex justify-content-center'>This is a weather app that allows you to search for a city, and see that cities current and future conditions! It then adds that city to a search history so you can check back on it whenever you'd like.</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: HTML/CSS, Javascript</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://codybarnes9624.github.io/Weather-app/'>
                                Weather App
                            </Button>
                            <Button className='prjBtn' variant='warning' href='https://github.com/CodyBarnes9624/Weather-app'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                    <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>Note Taker</h5>
                        <p className='prjDesc d-flex justify-content-center'>This is a note taking application that can be used to write and save notes for future use! In this assignment I built the back end, and connected it to the already written code!</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://note-taker-b73e.onrender.com'>
                               Note Taker
                            </Button>
                            <Button className='prjBtn' variant='warning' href=' https://github.com/CodyBarnes9624/Note-Taker'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                    <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>Task Board</h5>
                        <p className='prjDesc d-flex justify-content-center'>In this assignment we added functionality to a task board so that we could set dates for tasks that need completed, and by color coding could tell whether it was on track, almost due, or past due.</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://codybarnes9624.github.io/task-board/
'>
                                Task Board
                            </Button>
                            <Button className='prjBtn' variant='warning' href='https://github.com/CodyBarnes9624/task-board'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

};

export default Portfolio;